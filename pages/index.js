import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage.</p>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
