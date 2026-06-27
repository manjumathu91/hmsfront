
// src/admin/Bookings.jsx

import { useEffect, useState } from "react";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("bookings")) || [];
    setBookings(data);
  }, []);

  const handleCancel = (bookingId) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    const updatedBookings = bookings.map((booking) =>
      booking.bookingId === bookingId
        ? { ...booking, status: "Cancelled" }
        : booking
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    alert("Booking Cancelled Successfully!");
  };

  const filteredBookings = bookings.filter(
    (booking) =>
      booking.bookingId
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      booking.resortName
        ?.toLowerCase()
        .includes(search.toLowerCase()) ||
      booking.roomType
        ?.toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="flex flex-col md:flex-row justify-between items-center mb-8">

        <div>

          <h1 className="text-4xl font-bold">
            Booking Management
          </h1>

          <p className="text-gray-500 mt-2">
            View and manage all bookings
          </p>

        </div>

        <div className="bg-blue-600 text-white px-6 py-4 rounded-xl mt-4 md:mt-0">

          <p>Total Bookings</p>

          <h2 className="text-3xl font-bold">
            {bookings.length}
          </h2>

        </div>

      </div>

      <input
        type="text"
        placeholder="Search Booking..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full md:w-96 border rounded-xl p-3 mb-6"
      />

      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">

        <table className="w-full">

          <thead className="bg-blue-600 text-white">

            <tr>

              <th className="p-4">
                Booking ID
              </th>

              <th>
                Resort
              </th>

              <th>
                Room
              </th>

              <th>
                Check In
              </th>

              <th>
                Check Out
              </th>

              <th>
                Guests
              </th>

              <th>
                Amount
              </th>

              <th>
                Payment
              </th>

              <th>
                Status
              </th>

              <th>
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {filteredBookings.length > 0 ? (

              filteredBookings.map((booking) => (

                <tr
                  key={booking.bookingId}
                  className="border-b text-center hover:bg-gray-50"
                >

                  <td className="py-4">
                    {booking.bookingId}
                  </td>

                  <td>
                    {booking.resortName}
                  </td>

                  <td>
                    {booking.roomType}
                  </td>

                  <td>
                    {booking.checkIn}
                  </td>

                  <td>
                    {booking.checkOut}
                  </td>

                  <td>
                    {booking.guests}
                  </td>

                  <td>
                    ₹{booking.totalAmount}
                  </td>

                  <td>
                    {booking.paymentMethod}
                  </td>

                  <td>

                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm
                      ${
                        booking.status === "Confirmed"
                          ? "bg-green-600"
                          : booking.status === "Cancelled"
                          ? "bg-red-600"
                          : "bg-yellow-500"
                      }`}
                    >
                      {booking.status}
                    </span>

                  </td>

                  <td>

                    {booking.status !==
                    "Cancelled" ? (

                      <button
                        onClick={() =>
                          handleCancel(
                            booking.bookingId
                          )
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                      >
                        Cancel
                      </button>

                    ) : (

                      <span className="text-gray-500">
                        --
                      </span>

                    )}

                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan="10"
                  className="text-center py-8 text-gray-500"
                >
                  No Bookings Found
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}