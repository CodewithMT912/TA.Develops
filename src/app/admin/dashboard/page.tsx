
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../../lib/supabase/server";
import AdminLogout from "../../../components/admin/AdminLogout";
import "../../../styles/admin/dashboard.css";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/admin/login");
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!adminEmail || user.email?.trim().toLowerCase() !== adminEmail) {
    redirect("/admin/login");
  }

  return (
    <main className="admin-layout">
      <aside className="admin-sidebar">
        <Link href="/" className="admin-brand">
          TA<span>.</span>DEVELOPS
          <small>ADMIN PANEL</small>
        </Link>

        <div className="admin-nav-label">MAIN MENU</div>

        <nav className="admin-navigation">
          <Link href="/admin/dashboard" className="admin-nav-link active">
            <i className="bi bi-grid-1x2-fill" />
            Dashboard
          </Link>

          <Link href="/admin/inquiries" className="admin-nav-link">
            <i className="bi bi-chat-left-text" />
            Inquiries
          </Link>

          <Link href="/admin/projects" className="admin-nav-link">
            <i className="bi bi-briefcase" />
            Projects
          </Link>

          <Link href="/admin/services" className="admin-nav-link">
            <i className="bi bi-layers" />
            Services
          </Link>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-profile">
            <div className="admin-avatar">
              {user.email?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className="admin-profile-info">
              <strong>Administrator</strong>
              <span>{user.email}</span>
            </div>
          </div>

          <AdminLogout />
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <span className="admin-eyebrow">OVERVIEW</span>
            <h1>Dashboard</h1>
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

        <div className="admin-content">
          <section className="admin-welcome">
            <div>
              <span>WELCOME BACK</span>
              <h2>Your workspace, at a glance.</h2>
              <p>
                Manage your business, monitor inquiries, and keep your projects
                moving forward.
              </p>
            </div>
            <div className="admin-welcome-icon">
              <i className="bi bi-graph-up-arrow" />
            </div>
          </section>

          <section className="admin-stats-grid">
            <article className="admin-stat-card">
              <div className="admin-stat-top">
                <span>Total Inquiries</span>
                <i className="bi bi-chat-square-text" />
              </div>
              <h3>—</h3>
              <p>Customer messages received</p>
            </article>

            <article className="admin-stat-card">
              <div className="admin-stat-top">
                <span>New Messages</span>
                <i className="bi bi-envelope" />
              </div>
              <h3>—</h3>
              <p>Messages waiting for review</p>
            </article>

            <article className="admin-stat-card">
              <div className="admin-stat-top">
                <span>Projects</span>
                <i className="bi bi-briefcase" />
              </div>
              <h3>06</h3>
              <p>Projects showcased</p>
            </article>

            <article className="admin-stat-card">
              <div className="admin-stat-top">
                <span>Completed</span>
                <i className="bi bi-check-circle" />
              </div>
              <h3>—</h3>
              <p>Completed inquiries</p>
            </article>
          </section>

          <section className="admin-lower-grid">
            <article className="admin-panel admin-inquiries-panel">
              <div className="admin-panel-heading">
                <div>
                  <span className="admin-eyebrow">CUSTOMER MESSAGES</span>
                  <h2>Recent Inquiries</h2>
                </div>
                <Link href="/admin/inquiries" className="admin-view-link">
                  View all <i className="bi bi-arrow-up-right" />
                </Link>
              </div>

              <div className="admin-empty-state">
                <div className="admin-empty-icon">
                  <i className="bi bi-inbox" />
                </div>
                <h3>Your inbox is ready</h3>
                <p>
                  Customer inquiries will appear here once we connect your
                  Supabase inbox.
                </p>
                <Link href="/admin/inquiries">
                  Open inquiries <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </article>

            <article className="admin-panel admin-quick-panel">
              <div className="admin-panel-heading">
                <div>
                  <span className="admin-eyebrow">SHORTCUTS</span>
                  <h2>Quick Actions</h2>
                </div>
              </div>

              <Link href="/admin/inquiries" className="admin-action-link">
                <span className="admin-action-icon">
                  <i className="bi bi-chat-dots" />
                </span>
                <span>
                  <strong>Manage Inquiries</strong>
                  <small>Review customer messages</small>
                </span>
                <i className="bi bi-arrow-up-right" />
              </Link>

              <Link href="/admin/projects" className="admin-action-link">
                <span className="admin-action-icon">
                  <i className="bi bi-folder2-open" />
                </span>
                <span>
                  <strong>Manage Projects</strong>
                  <small>Update your portfolio</small>
                </span>
                <i className="bi bi-arrow-up-right" />
              </Link>

              <Link href="/admin/services" className="admin-action-link">
                <span className="admin-action-icon">
                  <i className="bi bi-grid" />
                </span>
                <span>
                  <strong>Manage Services</strong>
                  <small>Review your offerings</small>
                </span>
                <i className="bi bi-arrow-up-right" />
              </Link>
            </article>
          </section>

          <footer className="admin-footer">
            <span>© {new Date().getFullYear()} TA Develops</span>
            <span>Built to manage better.</span>
          </footer>
        </div>
      </section>
    </main>
  );
}
