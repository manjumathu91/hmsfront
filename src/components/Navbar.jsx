import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    setShowMenu(false);
    alert("Logged out Successfully");

    navigate("/");
  };
return (
  <nav className="bg-white shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

      {/* Logo */}
      <div className="text-2xl lg:text-4xl font-extrabold tracking-wide 
                      bg-gradient-to-r from-blue-500 to-purple-600 
                      bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
        🏝 LuxeStay
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8 text-base font-medium">

        <Link
          to="/"
          className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
        >
          Home
        </Link>

        <Link
          to="/resorts"
          className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
        >
          Resorts
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
        >
          Contact
        </Link>

        {!user ? (
          <>
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-300"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-500 transition duration-300"
            >
              Register
            </Link>
          </>
        ) : (
          <div className="relative">
            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
            >
              👤 {user.username}
              <span>▼</span>
            </button>

            {showMenu && (
              <div className="absolute right-0 mt-3 w-48 bg-white rounded-lg shadow-lg border z-50">

                <Link
                  to="/profile"
                  onClick={() => setShowMenu(false)}
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  My Profile
                </Link>

                <Link
                  to="/my-bookings"
                  onClick={() => setShowMenu(false)}
                  className="block px-4 py-3 hover:bg-gray-100"
                >
                  My Bookings
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Logout
                </button>

              </div>
            )}
          </div>
        )}

      </div>

      {/* Hamburger Button */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

    </div>

        {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden flex flex-col bg-white shadow-md py-4 px-6 space-y-4">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            to="/resorts"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            Resorts
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-blue-600"
          >
            Contact
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg text-center hover:from-purple-600 hover:to-pink-500 transition duration-300"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <div className="font-semibold text-gray-700">
                👤 {user.username}
              </div>

              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                My Profile
              </Link>

              <Link
                to="/my-bookings"
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                My Bookings
              </Link>

              <button
                type="button"
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-left text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </>
          )}

        </div>
      )}
    </nav>
  );
}

