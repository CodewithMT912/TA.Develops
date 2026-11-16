
import Link from "next/link";
import AdminLogout from "./AdminLogout";

type AdminSidebarProps = {
  userEmail: string;
  activePage: string;
};

export default function AdminSidebar({
  userEmail,
  activePage,
}: AdminSidebarProps) {
  const initial = userEmail?.charAt(0).toUpperCase() || "A";

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin/dashboard",
      icon: "bi-grid-1x2-fill",
    },
    {
      name: "Inquiries",
      href: "/admin/inquiries",
      icon: "bi-chat-left-text",
    },
    {
      name: "Projects",
      href: "/admin/projects",
      icon: "bi-briefcase",
    },
    {
      name: "Services",
      href: "/admin/services",
      icon: "bi-layers",
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: "bi-gear",
    },
  ];

  return (
    <aside className="admin-sidebar">
      <Link href="/" className="admin-brand">
        TA<span>.</span>DEVELOPS
        <small>ADMIN PANEL</small>
      </Link>

      <div className="admin-nav-label">MAIN MENU</div>

      <nav className="admin-navigation">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`admin-nav-link ${
              activePage === item.name ? "active" : ""
            }`}
          >
            <i className={`bi ${item.icon}`} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="admin-sidebar-bottom">
        <div className="admin-profile">
          <div className="admin-avatar">{initial}</div>

          <div className="admin-profile-info">
            <strong>Administrator</strong>
            <span>{userEmail}</span>
          </div>
        </div>

        <AdminLogout />
      </div>
    </aside>
  );
}
