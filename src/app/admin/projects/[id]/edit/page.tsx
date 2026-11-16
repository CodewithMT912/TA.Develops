
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../../../../lib/supabase/server";
import AdminSidebar from "../../../../../components/admin/AdminSidebar";
import ProjectForm from "../../../../../components/admin/ProjectForm";
import "../../../../../styles/admin/dashboard.css";
import "../../../../../styles/admin/projects.css";

export default async function EditProjectPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/admin/login");

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();

  if (!adminEmail || user.email?.trim().toLowerCase() !== adminEmail) {
    redirect("/admin/login");
  }

  const { data: project, error } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !project) notFound();

  return (
    <main className="admin-layout">
      <AdminSidebar userEmail={user.email || ""} activePage="Projects" />

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <span className="admin-eyebrow">PORTFOLIO MANAGEMENT</span>
            <h1>Edit Project</h1>
          </div>
        </header>

        <div className="projects-admin-content">
          <div className="projects-admin-heading">
            <div>
              <span className="admin-eyebrow">UPDATE PORTFOLIO ITEM</span>
              <h2>{project.name}</h2>
              <p>Update the details of this project.</p>
            </div>

            <Link href="/admin/projects" className="projects-view-site">
              <i className="bi bi-arrow-left" /> Back to Projects
            </Link>
          </div>

          <section className="projects-admin-panel">
            <ProjectForm project={project} />
          </section>
        </div>
      </section>
    </main>
  );
}
