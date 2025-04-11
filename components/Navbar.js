import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '10px 20px', background: '#111', color: 'white' }}>
      <Link href="/" style={{ marginRight: 15, color: 'white' }}>🏠 Home</Link>
      <Link href="/accounts" style={{ marginRight: 15, color: 'white' }}>👤 Accounts</Link>
      <Link href="/schedule" style={{ marginRight: 15, color: 'white' }}>🕒 Schedule</Link>
      <Link href="/admins" style={{ marginRight: 15, color: 'white' }}>👥 Admins</Link>
      <Link href="/login" style={{ marginRight: 15, color: 'white' }}>🔐 Login</Link>
    </nav>
  );
}