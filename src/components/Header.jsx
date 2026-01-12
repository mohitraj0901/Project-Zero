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

