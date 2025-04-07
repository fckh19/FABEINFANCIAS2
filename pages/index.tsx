import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6 max-w-xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-4">FabeInfancias</h1>
      <p className="mb-6">Plataforma de cursos online.</p>
      <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Iniciar sesión</Link>
    </div>
  );
}