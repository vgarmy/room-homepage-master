import { useState } from 'react';
import logo from '../images/logo.svg';
import hamburger from '../images/icon-hamburger.svg';
import close from '../images/icon-close.svg';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="topheader absolute z-20 p-8 lg:p-18 w-full flex items-center justify-start">
        {/* Hamburger/Close button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <img src={menuOpen ? close : hamburger} alt="menu toggle" />
        </button>

        {/* Logo – hidden in mobile when menu is open */}
        {!menuOpen && (
          <img
            className="logo absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0"
            src={logo}
            alt="logo"
          />
        )}

        {/* Desktop navigation (unchanged) */}
        <nav className="topheader__nav ml-8 hidden md:flex">
          <ul className="topheader__list flex gap-6 text-[var(--White)] font-semibold">
            <li className="topheader__list-item">Home</li>
            <li className="topheader__list-item">Shop</li>
            <li className="topheader__list-item">About</li>
            <li className="topheader__list-item">Contact</li>
          </ul>
        </nav>
      </header>

      {/* Mobile menu: only shown on small screens */}
      <div className="md:hidden">
        <nav
          className={`absolute top-0 left-0 w-full bg-[var(--White)] p-7 z-10 shadow-md transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="flex justify-end gap-6">
            <ul className="flex gap-6 text-[var(--Black)] text-lg font-semibold">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
