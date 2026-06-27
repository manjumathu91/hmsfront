
// src/admin/Users.jsx

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [
      {
        id: 1,
        name: "Manju",
        email: "manju@gmail.com",
        phone: "9876543210",
        joined: "26-06-2026",
        status: "Active",
      },
      {
        id: 2,
        name: "Rahul",
        email: "rahul@gmail.com",
        phone: "9123456789",
        joined: "25-06-2026",
        status: "Active",
      },
      {
        id: 3,
        name: "Priya",
        email: "priya@gmail.com",
        phone: "9000011111",
        joined: "24-06-2026",
        status: "Inactive",
      },
    ];

    setUsers(storedUsers);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Delete this user?")) {
      const updated = users.filter((user) => user.id !== id);
      setUsers(updated);
      localStorage.setItem("users", JSON.stringify(updated));
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">Customers</h1>
          <p className="text-gray-500 mt-2">
            Registered Users
          </p>
        </div>

        <div className="bg-blue-600 text-white px-6 py-4 rounded-xl">
          <p>Total Users</p>
          <h2 className="text-3xl font-bold">{users.length}</h2>
        </div>
      </div>

      <input
        type="text"
        placeholder="Search User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-3 rounded-xl w-80 mb-6"
      />

      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>
              <th className="py-4">Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Joined</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

          </thead>

          <tbody>

            {filteredUsers.map((user) => (

              <tr
                key={user.id}
                className="text-center border-b hover:bg-gray-50"
              >

                <td className="py-4">{user.name}</td>

                <td>{user.email}</td>

                <td>{user.phone}</td>

                <td>{user.joined}</td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      user.status === "Active"
                        ? "bg-green-600"
                        : "bg-red-500"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                <td>

                  <button
                    onClick={() =>
                      alert(
                        `Name : ${user.name}\nEmail : ${user.email}\nPhone : ${user.phone}`
                      )
                    }
                    className="bg-green-600 text-white px-3 py-2 rounded-lg mr-2 hover:bg-green-700"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-600 text-white px-3 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

            {filteredUsers.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="py-8 text-center text-gray-500"
                >
                  No Users Found
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}