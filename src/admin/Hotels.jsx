
// src/admin/Hotels.jsx

import { useState } from "react";
import {resorts} from "../data/resorts";
import { useNavigate } from "react-router-dom";


function Hotels() {
  const [search, setSearch] = useState("");
const navigate = useNavigate();

  const filteredHotels = resorts.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase()) ||
      hotel.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      {/* Heading */}

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">

        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Hotels Management
          </h1>

          <p className="text-gray-500 mt-2">
            Manage all resorts and hotels
          </p>
        </div>

        <button onClick={() => navigate("/admin/add-hotel")}
          className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold"
        >
          + Add Hotel
        </button>

      </div>

      {/* Search */}

      <div className="mb-6">

        <input
          type="text"
          placeholder="Search hotel..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-80 border rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4 text-left">
                Image
              </th>

              <th className="p-4 text-left">
                Hotel
              </th>

              <th className="p-4 text-left">
                Location
              </th>

              <th className="p-4 text-left">
                Rating
              </th>

              <th className="p-4 text-left">
                Price
              </th>

              <th className="p-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredHotels.map((hotel) => (

              <tr
                key={hotel.id}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4">

                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-24 h-16 object-cover rounded-lg"
                  />

                </td>

                <td className="p-4 font-semibold">
                  {hotel.name}
                </td>

                <td className="p-4">
                  {hotel.location}
                </td>

                <td className="p-4">
                  ⭐ {hotel.rating}
                </td>

                <td className="p-4">
                  ₹{hotel.price}
                </td>

                <td className="p-4">

                  <div className="flex justify-center gap-3">

                    <button
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>

                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Hotels;