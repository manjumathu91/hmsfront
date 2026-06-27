import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter email");
      return;
    }

    alert(
      "Password reset link sent to your email"
    );

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
            Reset Your Password
          </p>
        </div>

        <form
          onSubmit={handleReset}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            required
            className="w-full border p-3 rounded-xl"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold"
          >
            Reset Password
          </button>

        </form>

        <p className="text-center mt-4">
          <span
            onClick={() =>
              navigate("/login")
            }
            className="text-blue-600 font-semibold cursor-pointer"
          >
            Back to Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default ForgotPassword;