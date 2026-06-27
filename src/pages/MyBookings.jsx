
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MyBookings() {

  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );
  const handleCancel = (bookingId) => {

  const updatedBookings = bookings.filter(
    (booking) => booking.bookingId !== bookingId
  );

  setBookings(updatedBookings);

  localStorage.setItem(
    "bookings",
    JSON.stringify(updatedBookings)
  );

  alert("Booking Cancelled Successfully");

};
if (bookings.length === 0) {

  return (

    <div className="min-h-screen flex flex-col justify-center items-center">

      <h1 className="text-4xl font-bold mb-4">

        No Bookings Found 😔

      </h1>

      <Link
        to="/resorts"
        className="bg-blue-600 text-white px-6 py-3 rounded-xl"
      >

        Browse Resorts

      </Link>

    </div>

  );

}
return (
  <div className="min-h-screen bg-gray-100 py-10 px-4">

    <div className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-8 text-center">
        📖 My Bookings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {bookings.map((booking) => (
          <div
            key={booking.bookingId}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
          >

            <div className="flex justify-between items-center mb-5">

              <h2 className="text-2xl font-bold text-blue-600">
                {booking.resortName}
              </h2>

              <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold">
                {booking.status}
              </span>

            </div>

            <div className="space-y-3">

              <p>
                🛏 <span className="font-semibold">Room :</span>{" "}
                {booking.roomType}
              </p>

              <p>
                📅 <span className="font-semibold">Check In :</span>{" "}
                {booking.checkIn}
              </p>

              <p>
                📅 <span className="font-semibold">Check Out :</span>{" "}
                {booking.checkOut}
              </p>

              <p>
                👨‍👩‍👧 <span className="font-semibold">Guests :</span>{" "}
                {booking.guests}
              </p>

              <p>
                🌙 <span className="font-semibold">Nights :</span>{" "}
                {booking.nights}
              </p>

              <p>
                💳 <span className="font-semibold">Payment :</span>{" "}
                {booking.paymentMethod}
              </p>

            </div>

            <hr className="my-5" />

            <div className="flex justify-between items-center">

              <h2 className="text-3xl font-bold text-green-600">
                ₹ {booking.totalAmount}
              </h2>

              <button
                onClick={() => handleCancel(booking.bookingId)}
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition"
              >
                Cancel Booking
              </button>

            </div>

          </div>
        
        ))}

      </div>

    </div>

  </div>
);
}
