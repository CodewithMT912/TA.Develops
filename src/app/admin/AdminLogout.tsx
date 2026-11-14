
"use client";

import { useRouter } from "next/navigation";
import { createClient } from "../../lib/supabase/client";

export default function AdminLogout() {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <button className="admin-logout" onClick={handleLogout}>
      <i className="bi bi-box-arrow-left" />
      Sign Out
    </button>
  );
}
