import { useState } from "react";
import { auth, googleProvider } from "../lib/firebase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/mis-cursos");
    } catch {
      alert("Error al iniciar sesión");
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/mis-cursos");
    } catch {
      alert("Error con Google");
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto">
      <h1 className="text-2xl mb-4">Login</h1>
      <input className="border p-2 w-full mb-2" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="border p-2 w-full mb-2" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={login} className="bg-blue-600 text-white w-full py-2 rounded mb-2">Entrar</button>
      <button onClick={loginWithGoogle} className="border w-full py-2 rounded">Entrar con Google</button>
    </div>
  );
}