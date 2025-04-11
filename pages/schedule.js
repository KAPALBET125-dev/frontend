import { useEffect, useState } from 'react';

export default function Schedule() {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:8000/schedules', {
      headers: { Authorization: 'Bearer ' + token },
    })
    .then(res => res.json())
    .then(data => setSchedules(data));
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h2>Jadwal Auto Forward</h2>
      <ul>
        {schedules.map((sch, i) => (
          <li key={i}>{sch.phone} → {sch.target} tiap {sch.interval} menit</li>
        ))}
      </ul>
    </div>
  );
}