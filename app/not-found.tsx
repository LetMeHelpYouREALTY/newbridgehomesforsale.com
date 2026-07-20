import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-section container">
      <h1>404 - Page Not Found</h1>
      <p>The page you requested does not exist.</p>
      <Link className="btn btn-primary" href="/">
        Return Home
      </Link>
    </main>
  );
}
