import Link from 'next/link';

export default function About() {
  return (
    <div className="container">
      <h1>About Page</h1>
      <p>This is a simple Next.js app using normal CSS.</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
}
