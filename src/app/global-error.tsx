"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui", padding: "2rem", maxWidth: "50rem", margin: "0 auto" }}>
        <h1 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>
          Something went wrong
        </h1>
        {process.env.NODE_ENV === "development" && (
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
          An error occurred. Check the terminal where <code>npm run dev</code> is running for the full stack trace.
        </p>
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
            fontWeight: 500,
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
