import Header from './components/Header';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
 function App() {
  return ( Header component
    <div>
      <Header />  {/* यह आपके हेडर को स्क्रीन पर दिखाएगा */}
      <h1>Welcome to District Tutor</h1>
    </div>
  );
}
  const colors = {
    primaryBlue: "#1DA1F2",
    darkText: "#14171A",
    mediumGray: "#657786",
  };

  // Navigate to /home (simulate successful signup/login)
  const handleSignup = () => {
    // Here you would normally call your signup API.
    // For now we navigate to the Home area after "signup".
    navigate("/home");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Here you would normally validate credentials and call your login API.
    setIsModalOpen(false);
    navigate("/home");
  };

  // --- SVG Icons ---
  const SiteLogo = ({ className, style }) => (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M18.244 2.25h.462l-6.521 7.643-4.474-7.643h-2.185l6.096 8.528-6.611 9.87h.482l6.193-7.531 5.378 7.531h2.185l-5.698-7.962zM10.276 18.175l-1.424-1.921-5.114-6.914h2.115l3.864 5.215 1.5-1.996h-.041l-4.148-5.617h2.128l3.66 4.965z"></path>
    </svg>
  );

  const GoogleIcon = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 48 48"
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        d="M44.5 20H24v8.5h11.8c-.5 2.5-2.2 4.6-4.5 5.9v7.8h9.6c5.6-5.3 8.9-12.8 8.9-21.2 0-1.4-.1-2.9-.3-4.2z"
        fill="#4285F4"
      />
      <path
        d="M24 45.5c-6.8 0-12.6-2.5-17.1-6.8l7.8-6c2.4 1.5 5.5 2.5 9.3 2.5 3.8 0 7.3-1 9.7-2.7l7.8 6c-4.5 4.3-10.4 6.8-17.5 6.8z"
        fill="#34A853"
      />
      <path
        d="M6.8 24c0-2.2.4-4.3 1.1-6.2v-7.8h-9.6c-1.2 2.4-1.9 5.2-1.9 8.2s.7 5.8 1.9 8.2h9.6v-7.8c-.7-1.9-1.1-4-1.1-6.2z"
        fill="#FBBC05"
      />
      <path
        d="M24 10.1c4.5 0 8.1 1.6 11.1 4.5l6.8-6.8c-4.1-3.9-9.5-6.2-17.9-6.2-7.1 0-12.6 2.5-17.1 6.8l7.8 6c2.4-1.5 5.5-2.5 9.3-2.5z"
        fill="#EA4335"
      />
    </svg>
  );

  const AppleIcon = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.91A8 8 0 1 0 12 3a8 8 1 0 0 0 0 17.91zM8 12c0 2 1 3 2 3s2-1 2-3c0-2-1-3-2-3s-2 1-2 3z" />
    </svg>
  );
  // --- End SVG Icons ---

  return (
    <div id="app" className="lg:flex min-h-screen bg-white font-inter">
      {/* LEFT PANEL (Branding) - Desktop only */}
      <div
        className="hidden lg:block lg:w-3/5 min-h-screen relative"
        style={{ backgroundColor: colors.darkText }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://placehold.co/864x1024/${colors.primaryBlue.substring(
              1
            )}/${colors.darkText.substring(1)}?text=Brand+Identity+Visual')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative flex items-center justify-center w-full h-full">
          <SiteLogo
            className="w-2/5 h-auto text-white fill-current opacity-90"
            style={{
              filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.5))",
            }}
          />
        </div>
      </div>

      {/* RIGHT PANEL (Actions) */}
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 lg:p-16 min-h-screen">
        <div className="w-full max-w-lg">
          {/* Small logo for mobile */}
          <SiteLogo
            className="lg:hidden w-8 h-8 mb-6"
            style={{ color: colors.primaryBlue }}
          />

          {/* Headings */}
          <h1
            className="mb-12"
            style={{
              fontSize: "clamp(3rem, 5vw, 4rem)",
              fontWeight: 900,
              color: colors.darkText,
            }}
          >
            Happening now.
          </h1>

          <h2
            className="mb-8 text-3xl font-bold"
            style={{ color: colors.darkText }}
          >
            Join today.
          </h2>

          {/* SIGN UP BLOCK */}
          <div id="signup-block">
            <button
              onClick={() => navigate("/home")}
              className="w-full flex items-center justify-center p-3 mb-4 font-semibold border border-gray-300 rounded-full shadow-md hover:bg-gray-50 transition duration-150"
            >
              <GoogleIcon className="w-5 h-5 mr-3" />
              Sign up with Google
            </button>

            <button
              onClick={() => navigate("/home")}
              className="w-full flex items-center justify-center p-3 mb-4 font-semibold border border-gray-300 rounded-full shadow-md hover:bg-gray-50 transition duration-150"
            >
              <AppleIcon className="w-6 h-6 mr-3" />
              Sign up with Apple
            </button>

            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-200" />
              <span
                className="flex-shrink mx-4 text-sm font-medium"
                style={{ color: colors.mediumGray }}
              >
                or
              </span>
              <div className="flex-grow border-t border-gray-200" />
            </div>

            <button
              onClick={handleSignup}
              className="w-full text-white p-3 mb-4 text-lg font-bold rounded-full transition duration-150 hover:bg-blue-600"
              style={{ backgroundColor: colors.primaryBlue }}
            >
              Create account
            </button>

            <p className="text-xs mb-12" style={{ color: colors.mediumGray }}>
              By signing up, you agree to the{" "}
              <a
                href="#"
                className="hover:underline"
                style={{ color: colors.primaryBlue }}
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="hover:underline"
                style={{ color: colors.primaryBlue }}
              >
                Privacy Policy
              </a>
              , including{" "}
              <a
                href="#"
                className="hover:underline"
                style={{ color: colors.primaryBlue }}
              >
                Cookie Use
              </a>
              .
            </p>
          </div>

          {/* LOGIN CTA */}
          <div id="login-cta">
            <h3
              className="text-xl font-bold mb-4"
              style={{ color: colors.darkText }}
            >
              Already have an account?
            </h3>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full p-3 text-lg font-bold rounded-full border transition duration-150 hover:bg-blue-50"
              style={{
                borderColor: colors.mediumGray,
                color: colors.primaryBlue,
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* LOGIN MODAL */}
      {isModalOpen && (
        <div
          id="login-modal"
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50"
        >
          <div className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md transform transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h3
                className="text-2xl font-bold"
                style={{ color: colors.darkText }}
              >
                Sign in to Social App
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-600 hover:text-gray-900 text-3xl leading-none"
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleLoginSubmit}>
              <div className="mb-5">
                <label htmlFor="username" className="sr-only">
                  Phone, email, or username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Phone, email, or username"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg transition duration-150"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg transition duration-150"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white p-3 mb-3 text-lg font-bold rounded-full transition duration-150 hover:bg-blue-600"
                style={{ backgroundColor: colors.primaryBlue }}
              >
                Sign in
              </button>

              <a
                href="#"
                className="block text-center text-sm hover:underline mb-6"
                style={{ color: colors.primaryBlue }}
              >
                Forgot password?
              </a>
            </form>

            <p
              className="text-center text-sm"
              style={{ color: colors.mediumGray }}
            >
              Don&apos;t have an account?{" "}
              <button
                type="button"
                onClick={handleSignup}
                className="font-semibold hover:underline"
                style={{ color: colors.primaryBlue }}
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
