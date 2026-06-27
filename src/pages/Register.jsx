
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      alert(
        "Password must be at least 6 characters"
      );
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
// Existing users
const users =
  JSON.parse(localStorage.getItem("users")) || [];

// Duplicate email check
const existingUser = users.find(
  (user) => user.email === email
);

if (existingUser) {
  alert("Email already registered");
  return;
}

// New user
const userData = {
  id: Date.now(),
  name,
  email,
  password,
  joined: new Date().toLocaleDateString(),
  status: "Active",
};

// Add to users array
users.push(userData);

// Save all users
localStorage.setItem(
  "users",
  JSON.stringify(users)
);

// (Optional) Last registered user
localStorage.setItem(
  "registeredUser",
  JSON.stringify(userData)
);

alert("Registration Successful!");

navigate("/login");
  };
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold text-blue-600">
            LuxStay
          </h1>

          <p className="text-gray-500 mt-2">
            Create Your Account
          </p>
        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            required
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            required
            minLength="6"
            className="w-full border p-3 rounded-xl"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            required
            className="w-full border p-3 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() =>
              navigate("/login")
            }
            className="text-blue-600 font-semibold cursor-pointer"
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Register;