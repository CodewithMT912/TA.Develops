
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../../../lib/supabase/server";
import AdminSidebar from "../../../../components/admin/AdminSidebar";
import "../../../../styles/admin/dashboard.css";
import "../../../../styles/admin/inquiries.css";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function InquiryDetailsPage({ params }: Props) {
  const { id } = await params;
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

  const { data: inquiry, error } = await supabase
    .from("inquiries")
    .select("id, name, email, service, message, status, created_at")
    .eq("id", id)
    .maybeSingle();

  if (error) {
    return (
      <main className="admin-layout">
        <AdminSidebar userEmail={user.email || ""} activePage="Inquiries" />
        <section className="admin-main">
          <div className="inquiries-content">
            <h2>Unable to load inquiry</h2>
            <p>{error.message}</p>
            <Link href="/admin/inquiries">Back to Inquiries</Link>
          </div>
        </section>
      </main>
    );
  }

  if (!inquiry) notFound();

  return (
    <main className="admin-layout">
      <AdminSidebar userEmail={user.email || ""} activePage="Inquiries" />

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <span className="admin-eyebrow">CUSTOMER MANAGEMENT</span>
            <h1>Message Details</h1>
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
              <h2>Customer Message</h2>
              <p>View the complete details of this inquiry.</p>
            </div>

            <Link href="/admin/inquiries" className="inquiries-back">
              <i className="bi bi-arrow-left" /> Back to Inquiries
            </Link>
          </div>

          <section className="inquiries-panel inquiry-details-panel">
            <div className="inquiries-panel-heading">
              <div>
                <span className="admin-eyebrow">MESSAGE INFORMATION</span>
                <h2>{inquiry.name}</h2>
              </div>

              <span className="inquiry-status">
                {inquiry.status || "New"}
              </span>
            </div>

            <div className="inquiry-details-grid">
              <div>
                <span>Customer Name</span>
                <strong>{inquiry.name}</strong>
              </div>

              <div>
                <span>Email Address</span>
                <a href={`mailto:${inquiry.email}`}>
                  {inquiry.email}
                </a>
              </div>

              <div>
                <span>Requested Service</span>
                <strong>{inquiry.service || "Not specified"}</strong>
              </div>

              <div>
                <span>Submitted On</span>
                <strong>
                  {new Date(inquiry.created_at).toLocaleString("en-PK", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                </strong>
              </div>
            </div>

            <div className="inquiry-full-message">
              <span>CUSTOMER MESSAGE</span>
              <p>{inquiry.message}</p>
            </div>

            <div className="inquiry-details-actions">
              <a
                href={`mailto:${inquiry.email}?subject=${encodeURIComponent(
                  "Re: Your inquiry to TA Develops"
                )}`}
                className="inquiries-back"
              >
                <i className="bi bi-envelope" /> Reply by Email
              </a>

              <Link href="/admin/inquiries" className="inquiries-back">
                Back to Inbox
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
