import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(() => {
  const savedProfile = localStorage.getItem("adminProfile");

  return savedProfile
    ? JSON.parse(savedProfile)
    : {
        name: "Admin",
        email: "admin@gmail.com",
        phone: "9876543210",
      };
});

  const [password, setPassword] = useState({
    current: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = () => {
    localStorage.setItem(
      "adminProfile",
      JSON.stringify(profile)
    );

    alert("Profile Updated Successfully!");
    window.location.reload();

  };

  const updatePassword = () => {
    if (
      !password.current ||
      !password.newPassword ||
      !password.confirmPassword
    ) {
      alert("Fill all password fields");
      return;
    }

    if (
      password.newPassword !==
      password.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    alert("Password Updated Successfully!");

    setPassword({
      current: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("adminLoggedIn");
      navigate("/admin-login");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        ⚙ Settings
      </h1>

      {/* Profile */}

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

        <h2 className="text-2xl font-bold mb-6">
          Admin Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleProfileChange}
            placeholder="Name"
            className="border rounded-xl p-3"
          />

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            placeholder="Email"
            className="border rounded-xl p-3"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleProfileChange}
            placeholder="Phone"
            className="border rounded-xl p-3"
          />

        </div>

        <button
          onClick={saveProfile}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Save Profile
        </button>

      </div>

      {/* Password */}

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

        <h2 className="text-2xl font-bold mb-6">
          Change Password
        </h2>

        <div className="space-y-4">

          <input
            type="password"
            name="current"
            value={password.current}
            onChange={handlePasswordChange}
            placeholder="Current Password"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="password"
            name="newPassword"
            value={password.newPassword}
            onChange={handlePasswordChange}
            placeholder="New Password"
            className="w-full border rounded-xl p-3"
          />

          <input
            type="password"
            name="confirmPassword"
            value={password.confirmPassword}
            onChange={handlePasswordChange}
            placeholder="Confirm Password"
            className="w-full border rounded-xl p-3"
          />

        </div>

        <button
          onClick={updatePassword}
          className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
        >
          Update Password
        </button>

      </div>

      {/* Logout */}

      <div className="bg-white rounded-2xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Logout
        </h2>

        <p className="text-gray-500 mb-5">
          Logout from the admin panel.
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
        >
          Logout
        </button>

      </div>

    </div>
  );
}