
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  if (!email || !password) {
    alert("Please fill all fields");
    return;
  }
const username = email.split("@")[0];

localStorage.setItem(
  "user",
  JSON.stringify({
    username,
    email,
  })
);
  
  alert("Login Successful");

  console.log(localStorage.getItem("pendingBooking"));


  const pendingBooking = JSON.parse(
    localStorage.getItem("pendingBooking")
  );

  if (pendingBooking) {
    localStorage.removeItem("pendingBooking");

    navigate(
      `/booking/${pendingBooking.resortId}/${pendingBooking.roomId}`
    );
  } else {
    navigate("/");
  }
};

  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>
         
        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              className="w-full border p-3 rounded-xl"
              placeholder="Enter Email"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
              minLength="6"
              className="w-full border p-3 rounded-xl"
              placeholder="Enter Password"
            />
          </div>
          <p
  onClick={() =>
    navigate("/forgot-password")
  }
  className="text-blue-600 cursor-pointer"
>
  Forgot Password?
</p>
          <p className="text-center mt-4 text-gray-600">
  Don't have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    className="text-blue-600 cursor-pointer font-semibold"
  >
    Register
  </span>
</p>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;