import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      navigate("/dashboard");
    }
  }

  return (
    <div style={{
      minHeight: "100vh", background: "#111", display: "flex",
      alignItems: "center", justifyContent: "center"
    }}>
      <div style={{
        background: "#1a1a1a", padding: "2.5rem", borderRadius: "8px",
        width: "100%", maxWidth: "400px", border: "1px solid #2a2a2a"
      }}>
        <h1 style={{ color: "#f97316", marginBottom: "0.25rem", fontSize: "1.5rem" }}>
          White Goods Manager
        </h1>
        <p style={{ color: "#666", marginBottom: "2rem", fontSize: "0.875rem" }}>
          Sign in to your account
        </p>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ color: "#aaa", fontSize: "0.875rem", display: "block", marginBottom: "0.5rem" }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%", padding: "0.75rem", background: "#111",
                border: "1px solid #333", borderRadius: "4px", color: "#fff",
                fontSize: "1rem", boxSizing: "border-box"
              }}
            />
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ color: "#aaa", fontSize: "0.875rem", display: "block", marginBottom: "0.5rem" }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: "100%", padding: "0.75rem", background: "#111",
                border: "1px solid #333", borderRadius: "4px", color: "#fff",
                fontSize: "1rem", boxSizing: "border-box"
              }}
            />
          </div>

          {error && (
            <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%", padding: "0.75rem", background: "#f97316",
              border: "none", borderRadius: "4px", color: "#fff",
              fontSize: "1rem", fontWeight: "600", cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}