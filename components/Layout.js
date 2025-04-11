
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Userbot Panel</h2>
        <nav className="flex flex-col gap-4">
          <Link href="/" className="hover:text-yellow-400">🏠 Dashboard</Link>
          <Link href="/accounts" className="hover:text-yellow-400">👤 Accounts</Link>
          <Link href="/schedule" className="hover:text-yellow-400">🕒 Schedule</Link>
          <Link href="/admins" className="hover:text-yellow-400">👥 Admins</Link>
          <Link href="/login" className="hover:text-yellow-400">🔐 Login</Link>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-100 p-8">{children}</main>
    </div>
  );
}
