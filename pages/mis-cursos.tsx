import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function MisCursos() {
  const [usuario, setUsuario] = useState<any>(null);
  const [cursos, setCursos] = useState<any[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setUsuario(user);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const cargarCursos = async () => {
      if (!usuario) return;
      const ref = collection(db, "compras");
      const q = query(ref, where("usuarioId", "==", usuario.uid));
      const snap = await getDocs(q);
      const hoy = new Date();
      const activos = snap.docs
        .map((doc) => doc.data())
        .filter((c) => new Date(c.expira) > hoy);
      setCursos(activos);
    };
    cargarCursos();
  }, [usuario]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl mb-4">Mis Cursos</h1>
      {cursos.length > 0 ? (
        cursos.map((c, i) => (
          <div key={i} className="border p-4 mb-2 rounded">
            <h2 className="font-bold">{c.nombre}</h2>
            <p>Acceso hasta: {c.expira}</p>
          </div>
        ))
      ) : (
        <p>No tenés cursos activos.</p>
      )}
    </div>
  );
}