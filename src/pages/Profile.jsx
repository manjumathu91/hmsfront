
import { useState } from "react";

export default function MyProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [username, setUsername] = useState(user?.username || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");

  const handleSave = () => {
    const updatedUser = {
      ...user,
      username,
      email,
      phone,
      address,
    };

    localStorage.setItem("user", JSON.stringify(updatedUser));

    alert("✅ Profile Updated Successfully");

    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">

  <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">

    {/* Header */}
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-36"></div>

    {/* Avatar */}
    <div className="flex justify-center -mt-14">

      <div className="w-28 h-28 rounded-full bg-white shadow-lg flex items-center justify-center text-4xl font-bold text-blue-600 border-4 border-white">

        {username.charAt(0).toUpperCase()}

      </div>

    </div>

    <div className="text-center mt-4">
      <h2 className="text-3xl font-bold">
        My Profile
      </h2>

      <p className="text-gray-500">
        Manage your account details
      </p>
    </div>
          {/* Form */}
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Username */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Username
          </label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Username"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Email"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Phone Number
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Phone Number"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            Address
          </label>

          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Address"
          />
        </div>

      </div>
            {/* Buttons */}
      <div className="px-8 pb-8 flex flex-col sm:flex-row gap-4">

        <button
          onClick={handleSave}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-500 transition duration-300"
        >
          💾 Save Changes
        </button>

        <button
          onClick={() => window.history.back()}
          className="flex-1 border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Cancel
        </button>

      </div>

      {/* Account Info */}
      <div className="border-t px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="bg-blue-50 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-blue-700 mb-2">
            👤 Account Status
          </h3>

          <p className="text-gray-600">
            Active Member
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl p-5 shadow-sm">
          <h3 className="font-bold text-purple-700 mb-2">
            📅 Member Since
          </h3>

          <p className="text-gray-600">
            {new Date().getFullYear()}
          </p>
        </div>

      </div>

    </div>
  </div>
);
}