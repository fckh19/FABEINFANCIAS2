import Link from "next/link";
import { cursos } from "@/data/cursos";

export default function Cursos() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cursos Disponibles</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {cursos.map(curso => (
          <div key={curso.id} className="border rounded-xl p-4 shadow">
            <h2 className="text-xl font-semibold">{curso.titulo}</h2>
            <p className="text-gray-600">{curso.descripcion}</p>
            <p className="text-sm text-green-600 font-bold mt-1">$ {curso.precio}</p>
            <Link href={`/curso/${curso.id}`} className="mt-3 inline-block px-4 py-2 bg-black text-white rounded">Comprar</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
