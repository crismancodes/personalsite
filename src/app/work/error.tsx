"use client";

import { useEffect } from "react";

export default function WorkError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[Work route error]", error.message, error.stack);
  }, [error]);

  return (
    <div style={{ padding: "2rem", maxWidth: "50rem", margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: "1.25rem", fontWeight: 600 }}>Something went wrong on this page</h1>
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
      </pre>
      <button
        type="button"
        onClick={reset}
        style={{
          marginTop: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#6EEB49",
          color: "#1c1917",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Try again
      </button>
      <a href="/work" style={{ marginLeft: "0.5rem", color: "#6EEB49" }}>Back to work</a>
    </div>
  );
}
