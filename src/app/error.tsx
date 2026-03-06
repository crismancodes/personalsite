"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Page error:", error.message, error.stack);
  }, [error]);

  const isDev = process.env.NODE_ENV === "development";

  return (
    <div style={{ padding: "2rem", maxWidth: "50rem", margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
        Something went wrong
      </h1>
      {isDev && (
        <pre
          style={{
            marginTop: "1rem",
            padding: "1rem",
            background: "#f5f5f4",
            borderRadius: "6px",
            fontSize: "0.75rem",
            overflow: "auto",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {error.message}
          {"\n\n"}
          {error.stack}
        </pre>
      )}
      <p style={{ color: "#57534e", marginTop: "1rem" }}>
        An error occurred. Try again or go home.
      </p>
      <button
        type="button"
        onClick={reset}
        style={{
          marginTop: "1rem",
          marginRight: "0.5rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#6EEB49",
          color: "#1c1917",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
          fontWeight: 500,
        }}
      >
        Try again
      </button>
      <a
        href="/"
        style={{ marginTop: "1rem", display: "inline-block", color: "#6EEB49", fontWeight: 500 }}
      >
        Go home
      </a>
    </div>
  );
}
