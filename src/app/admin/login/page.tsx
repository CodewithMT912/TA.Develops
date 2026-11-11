
"use client";

import { useState, type FormEvent } from "react";
import { createClient } from "../../../lib/supabase/client";
import { FiLock, FiMail, FiLogIn } from "react-icons/fi";
import "../../../styles/pages/admin-login.css";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setError("");

    console.log("1. Login started");

    try {
      const supabase = createClient();

      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      console.log("2. Supabase response:", {
        user: data.user?.email,
        sessionExists: !!data.session,
        error: loginError?.message,
      });

      if (loginError || !data.user || !data.session) {
        setError(
          loginError?.message || "Login failed. No session created."
        );
        setLoading(false);
        return;
      }

      console.log("3. Login successful. Redirecting...");

      window.location.href = "/admin/dashboard";
    } catch (err) {
      console.error("Unexpected login error:", err);

      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  }

  return (
    <main className="admin-login-page">
      <div className="admin-login-card">

        <div className="admin-login-logo">
          TA<span>.</span>DEVELOPS
        </div>

        <span className="admin-login-label">
          PRIVATE ADMIN ACCESS
        </span>

        <h1>
          Welcome <span>Back.</span>
        </h1>

        <p className="admin-login-description">
          Sign in to access your TA Develops administration panel.
        </p>

        <form onSubmit={handleLogin} className="admin-login-form">

          <div className="admin-login-field">
            <label htmlFor="admin-email">Email Address</label>

            <div className="admin-login-input">
              <FiMail />

              <input
                id="admin-email"
                type="email"
                placeholder="Enter your admin email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                autoComplete="username"
                required
              />
            </div>
          </div>

          <div className="admin-login-field">
            <label htmlFor="admin-password">Password</label>

            <div className="admin-login-input">
              <FiLock />

              <input
                id="admin-password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
            </div>
          </div>

          {error && (
            <p className="admin-login-error">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="admin-login-btn"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
            {!loading && <FiLogIn />}
          </button>

        </form>

        <div className="admin-login-footer">
          SECURE ADMINISTRATION · TA DEVELOPS
        </div>

      </div>
    </main>
  );
}
