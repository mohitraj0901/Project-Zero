import React, { useState } from "react";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Header from "../components/Header";
import News from "./News";
import SocialFeed from "./SocialFeed";

export default function Home() {
  const [profileOpen, setProfileOpen] = useState(false);
  const location = useLocation();

  return (
    // Updated background to a very soft gradient for an "elegant" feel
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-50 via-white to-gray-100">
      
      {/* Header stays at the top with a glass effect */}
      <Header onProfileClick={() => setProfileOpen(true)} />

      <main className="max-w-4xl mx-auto px-6 py-10">
        {/* Breadcrumb or Page Indicator (Optional but adds elegance) */}
        <div className="mb-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 capitalize">
            {location.pathname.split("/").pop()}
          </h1>
          <p className="text-slate-500 text-sm mt-1">Stay updated with what's happening around you.</p>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="news" replace />} />
          <Route path="news" element={<News />} />
          <Route path="feed" element={<SocialFeed />} />
        </Routes>
      </main>

      {/* --- Elegant Side Drawer --- */}
      {profileOpen && (
        <div className="fixed inset-0 z-50 flex overflow-hidden">
          {/* Backdrop with blur */}
          <div 
            className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" 
            onClick={() => setProfileOpen(false)}
          ></div>

          {/* Drawer Content */}
          <div className="relative w-full max-w-xs bg-white shadow-2xl flex flex-col h-full transform transition-transform duration-300 ease-in-out">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Account</span>
                <button 
                  onClick={() => setProfileOpen(false)} 
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-indigo-200">
                  M
                </div>
                <div>
                  <div className="font-bold text-lg text-slate-800">Mohit Raj</div>
                  <div className="text-sm text-indigo-500 font-medium">@mohitraj</div>
                </div>
              </div>
            </div>

            <nav className="flex-1 p-4 space-y-1">
              <DrawerItem icon="👤" label="Profile" />
              <DrawerItem icon="⚙️" label="Settings" />
              <DrawerItem icon="🔔" label="Notifications" />
              <div className="my-4 border-t border-gray-50"></div>
              <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors font-medium">
                <span>🚪</span>
                <span>Logout</span>
              </button>
            </nav>

            <div className="p-6 bg-slate-50 text-xs text-center text-gray-400">
              Zero v1.0.4 • 2025
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper component for clean sidebar items
function DrawerItem({ icon, label }) {
  return (
    <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-indigo-600 transition-all font-medium">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </button>
  );
}