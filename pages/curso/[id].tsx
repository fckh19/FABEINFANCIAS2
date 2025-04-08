import { useRouter } from "next/router";
import { cursos } from "@/data/cursos";

export default function CursoDetalle() {
  const router = useRouter();
  const { id } = router.query;

  const curso = cursos.find(c => c.id === id);

  if (!curso) return <p className="p-6">Curso no encontrado</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{curso.titulo}</h1>
      <p className="mt-2 text-gray-700">{curso.descripcion}</p>
      <p className="mt-2 font-semibold text-green-700">$ {curso.precio}</p>
      <button className="mt-4 px-4 py-2 bg-black text-white rounded">Comprar (simulado)</button>
    </div>
  );
}
