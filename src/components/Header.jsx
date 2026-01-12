import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header({ onProfileClick }) {
  const location = useLocation();
  return (
    <header className="w-full flex items-center justify-between px-6 py-3 bg-white border-b shadow-sm">
      <div className="flex items-center gap-4">
        {/* Profile button */}
        <button
          onClick={onProfileClick}
          className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold"
          aria-label="Profile"
        >
          M
        </button>

        {/* App title */}
        <div className="ml-2 text-lg font-bold text-gray-800">Zero</div>
      </div>

      {/* Nav links */}
      <nav className="flex items-center gap-4">
        <Link
          to="/home/news"
          className={`px-3 py-2 rounded-md ${
            location.pathname.startsWith("/home/news")
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          News
        </Link>
        <Link
          to="/home/feed"
          className={`px-3 py-2 rounded-md ${
            location.pathname.startsWith("/home/feed")
              ? "bg-blue-50 text-blue-600"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          Feed
        </Link>
      </nav>
    </header>
  );
}
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <h1>District Tutor</h1>
      </div>
      <nav>
        <ul style={styles.navLinks}>
          <li style={styles.link}>Home</li>
          <li style={styles.link}>Find Tutors</li>
          <li style={styles.link}>Become a Tutor</li>
          <li style={{...styles.link, ...styles.loginBtn}}>Login</li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 5%',
    backgroundColor: '#2c3e50',
    color: 'white',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  logo: {
    fontSize: '1.2rem',
    fontWeight: 'bold'
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    alignItems: 'center'
  },
  link: {
    cursor: 'pointer',
    fontSize: '1rem'
  },
  loginBtn: {
    backgroundColor: '#3498db',
    padding: '8px 15px',
    borderRadius: '5px',
    fontWeight: 'bold'
  }
};

export default Header;

