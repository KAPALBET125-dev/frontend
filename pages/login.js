import { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ username, password }),
    });
    const data = await res.json();
    if (data.access_token) {
      localStorage.setItem('token', data.access_token);
      alert('Login sukses!');
    } else {
      alert('Login gagal!');
    }
  }

  return (
    <form onSubmit={handleLogin} style={{ padding: 40 }}>
      <h2>Login Admin</h2>
      <input placeholder="username" onChange={e => setUsername(e.target.value)} /><br/>
      <input placeholder="password" type="password" onChange={e => setPassword(e.target.value)} /><br/>
      <button type="submit">Login</button>
    </form>
  );
}