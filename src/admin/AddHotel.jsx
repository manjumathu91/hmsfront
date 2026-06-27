// src/admin/AddHotel.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddHotel() {
  const navigate = useNavigate();

  const [hotel, setHotel] = useState({
    name: "",
    location: "",
    price: "",
    rating: "",
    rooms: "",
    status: "Available",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setHotel({
      ...hotel,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !hotel.name ||
      !hotel.location ||
      !hotel.price ||
      !hotel.rating ||
      !hotel.rooms
    ) {
      alert("Please fill all required fields.");
      return;
    }

    alert("Hotel Added Successfully!");

    console.log(hotel);

    navigate("/admin/hotels");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-4xl font-bold mb-2 text-gray-800">
          Add New Hotel
        </h1>

        <p className="text-gray-500 mb-8">
          Fill the hotel details below.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Hotel Name */}

          <div>
            <label className="font-semibold">
              Hotel Name
            </label>

            <input
              type="text"
              name="name"
              value={hotel.name}
              onChange={handleChange}
              placeholder="Enter hotel name"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          {/* Location */}

          <div>
            <label className="font-semibold">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={hotel.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          {/* Price & Rating */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={hotel.price}
                onChange={handleChange}
                placeholder="4500"
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="font-semibold">
                Rating
              </label>

              <input
                type="number"
                step="0.1"
                name="rating"
                value={hotel.rating}
                onChange={handleChange}
                placeholder="4.8"
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

          </div>

          {/* Rooms & Status */}

          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="font-semibold">
                Total Rooms
              </label>

              <input
                type="number"
                name="rooms"
                value={hotel.rooms}
                onChange={handleChange}
                placeholder="25"
                className="w-full mt-2 border rounded-xl p-3"
              />
            </div>

            <div>
              <label className="font-semibold">
                Status
              </label>

              <select
                name="status"
                value={hotel.status}
                onChange={handleChange}
                className="w-full mt-2 border rounded-xl p-3"
              >
                <option>Available</option>
                <option>Full</option>
                <option>Maintenance</option>
              </select>
            </div>

          </div>

          {/* Image URL */}

          <div>
            <label className="font-semibold">
              Hotel Image URL
            </label>

            <input
              type="text"
              name="image"
              value={hotel.image}
              onChange={handleChange}
              placeholder="Paste image URL"
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          {/* Description */}

          <div>
            <label className="font-semibold">
              Description
            </label>

            <textarea
              rows="5"
              name="description"
              value={hotel.description}
              onChange={handleChange}
              placeholder="Write hotel description..."
              className="w-full mt-2 border rounded-xl p-3"
            />
          </div>

          {/* Buttons */}

          <div className="flex gap-4">

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl"
            >
              Save Hotel
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/hotels")}
              className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddHotel;