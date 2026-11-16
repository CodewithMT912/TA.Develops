
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../../lib/supabase/server";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import "../../../styles/admin/dashboard.css";
import "../../../styles/admin/inquiries.css";

export default async function InquiriesPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) redirect("/admin/login");

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!adminEmail || user.email?.trim().toLowerCase() !== adminEmail) {
    redirect("/admin/login");
  }

  // Fetch real customer inquiries
  const { data: inquiries, error: inquiriesError } = await supabase
    .from("inquiries")
    .select("id, name, email, service, message, status, created_at")
    .order("created_at", { ascending: false });

  const messages = inquiries || [];

  // Calculate statistics
  const totalInquiries = messages.length;

  const newMessages = messages.filter(
    (item) => item.status?.toLowerCase() === "new"
  ).length;

  const inProgress = messages.filter(
    (item) => item.status?.toLowerCase() === "in progress"
  ).length;

  const completed = messages.filter(
    (item) => item.status?.toLowerCase() === "completed"
  ).length;

  return (
    <main className="admin-layout">
      <AdminSidebar
        userEmail={user.email || ""}
        activePage="Inquiries"
      />

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <span className="admin-eyebrow">CUSTOMER MANAGEMENT</span>
            <h1>Inquiries</h1>
          </div>

          <div className="admin-topbar-right">
            <span className="admin-status">
              <span />
              System Online
            </span>
            <div className="admin-top-avatar">
              {user.email?.charAt(0).toUpperCase() || "A"}
            </div>
          </div>
        </header>

        <div className="inquiries-content">
          <div className="inquiries-heading">
            <div>
              <h2>Customer Inquiries</h2>
              <p>Manage and respond to messages from your customers.</p>
            </div>

            <Link href="/admin/dashboard" className="inquiries-back">
              <i className="bi bi-arrow-left" /> Dashboard
            </Link>
          </div>

          {inquiriesError && (
            <div className="inquiries-error">
              Could not load inquiries: {inquiriesError.message}
            </div>
          )}

          <div className="inquiries-stats">
            <article className="inquiry-stat">
              <div className="inquiry-stat-icon">
                <i className="bi bi-inbox" />
              </div>
              <span>Total Inquiries</span>
              <h3>{totalInquiries}</h3>
              <small>All received messages</small>
            </article>

            <article className="inquiry-stat">
              <div className="inquiry-stat-icon">
                <i className="bi bi-envelope" />
              </div>
              <span>New Messages</span>
              <h3>{newMessages}</h3>
              <small>Waiting for review</small>
            </article>

            <article className="inquiry-stat">
              <div className="inquiry-stat-icon">
                <i className="bi bi-arrow-repeat" />
              </div>
              <span>In Progress</span>
              <h3>{inProgress}</h3>
              <small>Currently being handled</small>
            </article>

            <article className="inquiry-stat">
              <div className="inquiry-stat-icon">
                <i className="bi bi-check-circle" />
              </div>
              <span>Completed</span>
              <h3>{completed}</h3>
              <small>Successfully handled</small>
            </article>
          </div>

          <section className="inquiries-panel">
            <div className="inquiries-panel-heading">
              <div>
                <span className="admin-eyebrow">MESSAGE CENTER</span>
                <h2>All Messages</h2>
              </div>

              <span className="inquiry-count">
                {totalInquiries} Messages
              </span>
            </div>

            <div className="inquiries-table-wrap">
              <table className="inquiries-table">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Message</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {inquiriesError ? (
                    <tr>
                      <td colSpan={6}>
                        <div className="inquiries-empty">
                          Unable to load customer messages.
                        </div>
                      </td>
                    </tr>
                  ) : messages.length === 0 ? (
                    <tr>
                      <td colSpan={6}>
                        <div className="inquiries-empty">
                          <div>
                            <i className="bi bi-chat-square-text" />
                          </div>
                          <h3>No inquiries yet</h3>
                          <p>
                            Customer messages will appear here when
                            someone submits your Contact form.
                          </p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    messages.map((inquiry) => (
                      <tr key={inquiry.id}>
                        <td>
                          <div className="inquiry-customer">
                            <strong>{inquiry.name}</strong>
                            <a href={`mailto:${inquiry.email}`}>
                              {inquiry.email}
                            </a>
                          </div>
                        </td>

                        <td>{inquiry.service || "Not specified"}</td>

                        <td>
  <Link
    href={`/admin/inquiries/${inquiry.id}`}
    className="inquiry-message-link"
  >
    <div className="inquiry-message">
      {inquiry.message}
    </div>
    <small>View message →</small>
  </Link>
</td>

                        <td>
                          {new Date(inquiry.created_at).toLocaleDateString(
                            "en-PK",
                            {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </td>

                        <td>
                          <span
                            className={`inquiry-status status-${(
                              inquiry.status || "new"
                            )
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                          >
                            {inquiry.status || "New"}
                          </span>
                        </td>

                        <td>
                          <a
                            href={`mailto:${inquiry.email}`}
                            className="inquiry-action"
                            title="Reply by email"
                          >
                            <i className="bi bi-reply-fill" />
                          </a>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
