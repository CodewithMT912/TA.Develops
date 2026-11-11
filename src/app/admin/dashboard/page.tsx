
import { redirect } from "next/navigation";
import { createClient } from "../../../lib/supabase/server";

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
    <main className="admin-dashboard">
      <h1>
        TA Develops <span>Admin Dashboard</span>
      </h1>

      <p>Welcome back, {user.email}!</p>
      <p>Your admin authentication is working.</p>
    </main>
  );
}
