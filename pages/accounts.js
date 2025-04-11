import { useEffect, useState } from 'react';

export default function Accounts() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/accounts', {
      headers: { Authorization: 'Bearer ' + token },
    })
    .then(res => res.json())
    .then(data => setAccounts(data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Daftar Akun Telegram</h2>
      <ul>
        {accounts.map((acc, i) => <li key={i}>{acc.phone}</li>)}
      </ul>
    </div>
  );
}