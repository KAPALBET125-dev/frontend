import { useEffect, useState } from 'react';

export default function Admins() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/admins', {
      headers: { Authorization: 'Bearer ' + token },
    })
    .then(res => res.json())
    .then(data => setAdmins(data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Data Admin</h2>
      <ul>
        {admins.map((admin, i) => (
          <li key={i}>{admin.username} ({admin.role})</li>
        ))}
      </ul>
    </div>
  );
}