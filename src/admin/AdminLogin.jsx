import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const fillDemoCredentials = () => {
  setEmail("admin@gmail.com");
  setPassword("admin123");
};

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "admin",
        JSON.stringify({
          email,
        })
      );

      alert("Admin Login Successful");

      navigate("/admin/dashboard");
    } else {
      alert("Invalid Admin Credentials");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-600 to-purple-600">

      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-10">

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-blue-600">
            🏝 LuxeStay
          </h1>

          <p className="text-gray-500 mt-2">
            Admin Login
          </p>

        </div>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl hover:scale-105 transition"
          >
            Login
          </button>

        </form>

        <div className="mt-6 text-center">

  <p className="text-gray-500">
    Demo Login
  </p>

  <p
    onClick={fillDemoCredentials}
    className="cursor-pointer text-blue-600 font-semibold hover:underline"
  >
    admin@gmail.com
  </p>

  <p
    onClick={fillDemoCredentials}
    className="cursor-pointer text-blue-600 font-semibold hover:underline"
  >
    admin123
  </p>

</div>
      </div>

    </div>
  );
}