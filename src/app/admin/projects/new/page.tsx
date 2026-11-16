
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../../../lib/supabase/server";
import AdminSidebar from "../../../../components/admin/AdminSidebar";
import ProjectForm from "../../../../components/admin/ProjectForm";
import "../../../../styles/admin/dashboard.css";
import "../../../../styles/admin/projects.css";

export default async function NewProjectPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!adminEmail || user.email?.trim().toLowerCase() !== adminEmail) {
    redirect("/admin/login");
  }

  return (
    <main className="admin-layout">
      <AdminSidebar userEmail={user.email || ""} activePage="Projects" />

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <span className="admin-eyebrow">PORTFOLIO MANAGEMENT</span>
            <h1>Add Project</h1>
          </div>
        </header>

        <div className="projects-admin-content">
          <div className="projects-admin-heading">
            <div>
              <span className="admin-eyebrow">NEW PORTFOLIO ITEM</span>
              <h2>Create a Project</h2>
              <p>Add a new project to your company portfolio.</p>
            </div>

            <Link href="/admin/projects" className="projects-view-site">
              <i className="bi bi-arrow-left" /> Back to Projects
            </Link>
          </div>

          <section className="projects-admin-panel">
            <ProjectForm />
          </section>
        </div>
      </section>
    </main>
  );
}
