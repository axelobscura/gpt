import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>INICIO</h2>
      <h3>Inteligencia Artificial Para el Concreto y el Cemento</h3>
      <Link href="/api/auth/login">
        LOGIN
      </Link>
    </main>
  );
}
