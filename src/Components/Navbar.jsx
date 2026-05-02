import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/menu', label: 'Menu' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-between items-center py-3 px-6 text-white shadow-md relative">
      <h1 className="text-2xl font-bold tracking-wide">HOURS</h1>

      {/* Desktop */}
      <ul className="hidden md:flex gap-6 text-sm md:text-base">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`transition hover:text-red-400 ${location.pathname === to ? 'text-red-400' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Hamburger button */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-[#111] flex flex-col items-center gap-4 py-6 z-50">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                className={`text-lg transition hover:text-red-400 ${location.pathname === to ? 'text-red-400' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
