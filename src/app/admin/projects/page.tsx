
import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "../../../lib/supabase/server";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import "../../../styles/admin/dashboard.css";
import "../../../styles/admin/projects.css";

export default async function ProjectsPage() {
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

  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false });

  const projectList = projects || [];

  const totalProjects = projectList.length;
  const liveProjects = projectList.filter(
    (project) => project.status === "Live"
  ).length;
  const comingSoonProjects = projectList.filter(
    (project) => project.status === "Coming Soon"
  ).length;
  const featuredProjects = projectList.filter(
    (project) => project.featured
  ).length;

  return (
    <main className="admin-layout">
      <AdminSidebar userEmail={user.email || ""} activePage="Projects" />

      <section className="admin-main">
        <header className="admin-topbar">
          <div>
            <span className="admin-eyebrow">PORTFOLIO MANAGEMENT</span>
            <h1>Projects</h1>
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

        <div className="projects-admin-content">
          <div className="projects-admin-heading">
            <div>
              <span className="admin-eyebrow">YOUR PORTFOLIO</span>
              <h2>Project Management</h2>
              <p>Manage and organize your company's portfolio.</p>
            </div>

            <div className="projects-admin-actions">
              <Link href="/projects" className="projects-view-site">
                <i className="bi bi-box-arrow-up-right" />
                View Website
              </Link>

              <Link
                href="/admin/projects/new"
                className="projects-add-button"
              >
                <i className="bi bi-plus-lg" />
                Add New Project
              </Link>
            </div>
          </div>

          {error && (
            <div className="projects-admin-error">
              Could not load projects: {error.message}
            </div>
          )}

          <div className="projects-admin-stats">
            <article>
              <i className="bi bi-briefcase" />
              <span>Total Projects</span>
              <h3>{totalProjects}</h3>
            </article>

            <article>
              <i className="bi bi-globe" />
              <span>Live Projects</span>
              <h3>{liveProjects}</h3>
            </article>

            <article>
              <i className="bi bi-hourglass-split" />
              <span>Coming Soon</span>
              <h3>{comingSoonProjects}</h3>
            </article>

            <article>
              <i className="bi bi-star" />
              <span>Featured Projects</span>
              <h3>{featuredProjects}</h3>
            </article>
          </div>

          <section className="projects-admin-panel">
            <div className="projects-admin-panel-heading">
              <div>
                <span className="admin-eyebrow">PORTFOLIO DATABASE</span>
                <h2>All Projects</h2>
              </div>

              <span className="projects-admin-count">
                {totalProjects} Projects
              </span>
            </div>

            {error ? (
              <div className="projects-admin-empty">
                <i className="bi bi-exclamation-circle" />
                <h3>Unable to load projects</h3>
                <p>Check your Supabase table and permissions.</p>
              </div>
            ) : projectList.length === 0 ? (
              <div className="projects-admin-empty">
                <i className="bi bi-folder2-open" />
                <h3>No projects added yet</h3>
                <p>Your projects will appear here after you add them.</p>
              </div>
            ) : (
              <div className="projects-admin-table-wrap">
                <table className="projects-admin-table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Category</th>
                      <th>Technologies</th>
                     <th>Status</th>
<th>Featured</th>
<th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>
                    {projectList.map((project) => (
                      <tr key={project.id}>
                        <td>
                          <div className="projects-admin-name">
                            {project.image_url ? (
                              <img
                                src={project.image_url}
                                alt={project.name}
                              />
                            ) : (
                              <div className="projects-admin-placeholder">
                                <i className="bi bi-image" />
                              </div>
                            )}

                            <strong>{project.name}</strong>
                          </div>
                        </td>

                        <td>{project.category}</td>

                        <td>
                          <div className="projects-admin-tech">
                            {(project.technologies || []).map(
                              (technology: string) => (
                                <span key={technology}>{technology}</span>
                              )
                            )}
                          </div>
                        </td>

                        <td>
                          <span
                            className={`projects-admin-status ${
                              project.status === "Live"
                                ? "is-live"
                                : project.status === "In Progress"
                                ? "is-progress"
                                : "is-coming"
                            }`}
                          >
                            {project.status}
                          </span>
                        </td>

                        <td>
                          {project.featured ? (
                            <span className="projects-admin-featured">
                              <i className="bi bi-star-fill" /> Featured
                            </span>
                          ) : (
                            <span className="projects-admin-muted">No</span>
                          )}
                        </td>

                        <td>
  {project.featured ? (
    <span className="projects-admin-featured">
      <i className="bi bi-star-fill" /> Featured
    </span>
  ) : (
    <span className="projects-admin-muted">No</span>
  )}
</td>

{/* EDIT BUTTON */}
<td>
  <Link
    href={`/admin/projects/${project.id}/edit`}
    className="projects-edit-button"
  >
    <i className="bi bi-pencil-square" /> Edit
  </Link>
</td>  


                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}
