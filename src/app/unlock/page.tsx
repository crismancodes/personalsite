"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { Container } from "@/components/container";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function UnlockForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/work";
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setPending(true);
    try {
      const res = await fetch("/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, next }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Invalid password");
        setPending(false);
        return;
      }
      router.push(data.redirect ?? next);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
      setPending(false);
    }
  }

  return (
    <Section className="pt-8 md:pt-10">
      <Container className="max-w-sm">
        <h1 className="font-serif text-2xl font-semibold tracking-tight text-foreground">
          Unlock work
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the password to view case studies.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              autoFocus
              required
              aria-invalid={!!error}
              aria-describedby={error ? "password-error" : undefined}
            />
            {error && (
              <p id="password-error" className="mt-2 text-sm text-red-600" role="alert">
                {error}
              </p>
            )}
          </div>
          <Button type="submit" disabled={pending}>
            {pending ? "Checking…" : "Unlock"}
          </Button>
        </form>
      </Container>
    </Section>
  );
}

export default function UnlockPage() {
  return (
    <Suspense fallback={
      <Section className="pt-8 md:pt-10">
        <Container className="max-w-sm">
          <p className="text-muted-foreground">Loading…</p>
        </Container>
      </Section>
    }>
      <UnlockForm />
    </Suspense>
  );
}
