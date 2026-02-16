import Header from "./components/Header";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const colors = {
    primaryBlue: "#1DA1F2",
    darkText: "#14171A",
    mediumGray: "#657786",
  };

  const handleSignup = () => {
    navigate("/home");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-6" style={{ color: colors.darkText }}>
          Happening now.
        </h1>

        <h2 className="text-2xl font-semibold mb-8" style={{ color: colors.darkText }}>
          Join today.
        </h2>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="px-6 py-3 text-white font-bold rounded-full hover:bg-blue-600 transition"
          style={{ backgroundColor: colors.primaryBlue }}
        >
          Create account
        </button>

        {/* Login Section */}
        <div className="mt-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 border rounded-full font-semibold hover:bg-blue-50 transition"
            style={{
              borderColor: colors.mediumGray,
              color: colors.primaryBlue,
            }}
          >
            Sign in
          </button>
        </div>
      </div>

      {/* Login Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-80">
            <h3 className="text-xl font-bold mb-4">Sign in</h3>

            <form onSubmit={handleLoginSubmit}>
              <input
                type="text"
                placeholder="Username"
                required
                className="w-full p-2 border mb-3 rounded"
              />

              <input
                type="password"
                placeholder="Password"
                required
                className="w-full p-2 border mb-4 rounded"
              />

              <button
                type="submit"
                className="w-full py-2 text-white rounded"
                style={{ backgroundColor: colors.primaryBlue }}
              >
                Login
              </button>
            </form>

            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 text-sm text-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
