import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert('Login simulado para ' + email);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Iniciar sesión</h2>
      <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} /><br/>
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
