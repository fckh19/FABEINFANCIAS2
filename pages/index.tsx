import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">FABEINFANCIAS</h1>
      <p className="text-center">Plataforma de cursos online para infancias</p>
      <div className="flex gap-4">
        <Link href="/auth/login" className="bg-black text-white px-4 py-2 rounded">Login</Link>
        <Link href="/auth/signup" className="bg-gray-800 text-white px-4 py-2 rounded">Registrarse</Link>
        <Link href="/cursos" className="bg-blue-700 text-white px-4 py-2 rounded">Ver Cursos</Link>
      </div>
    </main>
  );
}
