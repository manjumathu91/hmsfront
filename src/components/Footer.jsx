import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}

          <div>

            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              🏝 LuxeStay
            </h2>

            <p className="text-gray-400 leading-7">
              Discover luxury resorts and enjoy unforgettable vacations with
              comfort, elegance, and world-class hospitality.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/resorts"
                  className="text-gray-400 hover:text-white transition"
                >
                  Resorts
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Contact Info */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>📍 Chennai, Tamil Nadu</li>

              <li>📞 +91 98765 43210</li>

              <li>📧 support@luxestay.com</li>

            </ul>

          </div>

          {/* Follow Us */}

             <div>

  <h3 className="text-xl font-semibold mb-5">
    Follow Us
  </h3>

  <div className="flex flex-wrap gap-4">

    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="
      w-12
      h-12
      flex
      items-center
      justify-center
      rounded-full
      bg-blue-600
      hover:bg-blue-700
      hover:scale-110
      hover:-translate-y-1
      transition-all
      duration-300
      shadow-lg"
    >
      <FaFacebookF size={20} />
    </a>

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className="
      w-12
      h-12
      flex
      items-center
      justify-center
      rounded-full
      bg-pink-600
      hover:bg-pink-700
      hover:scale-110
      hover:-translate-y-1
      transition-all
      duration-300
      shadow-lg"
    >
      <FaInstagram size={20} />
    </a>

    <a
      href="https://twitter.com"
      target="_blank"
      rel="noreferrer"
      className="
      w-12
      h-12
      flex
      items-center
      justify-center
      rounded-full
      bg-sky-500
      hover:bg-sky-600
      hover:scale-110
      hover:-translate-y-1
      transition-all
      duration-300
      shadow-lg"
    >
      <FaTwitter size={20} />
    </a>

    <a
      href="https://youtube.com"
      target="_blank"
      rel="noreferrer"
      className="
      w-12
      h-12
      flex
      items-center
      justify-center
      rounded-full
      bg-red-600
      hover:bg-red-700
      hover:scale-110
      hover:-translate-y-1
      transition-all
      duration-300
      shadow-lg"
    >
      <FaYoutube size={20} />
    </a>

    <a
      href="https://linkedin.com"
      target="_blank"
      rel="noreferrer"
      className="
      w-12
      h-12
      flex
      items-center
      justify-center
      rounded-full
      bg-blue-800
      hover:bg-blue-900
      hover:scale-110
      hover:-translate-y-1
      transition-all
      duration-300
      shadow-lg"
    >
      <FaLinkedinIn size={20} />
    </a>

  </div>

</div>

        </div>

        <hr className="border-gray-700 my-10" />

        <div className="text-center text-gray-400">

          © 2025 <span className="font-semibold text-white">LuxeStay</span>.
          All Rights Reserved.

        </div>

      </div>

    </footer>
  );
}