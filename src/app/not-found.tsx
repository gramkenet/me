import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-3xl font-semibold tracking-tight">Not found</h1>
      <p className="mt-4 text-muted">That page doesn&apos;t exist.</p>
      <Link href="/" className="mt-6 inline-block underline underline-offset-4">
        Back home
      </Link>
    </div>
  );
}
