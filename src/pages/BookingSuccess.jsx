import { useNavigate } from "react-router-dom";

function BookingSuccess() {
  const navigate = useNavigate();

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const latestBooking =
    bookings[bookings.length - 1];

  if (!latestBooking) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold">
          No Booking Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">

        <div className="text-center">

          <div className="w-24 h-24 rounded-full bg-green-100 flex justify-center items-center mx-auto mb-5">

            <span className="text-6xl">
              ✅
            </span>

          </div>

          <h1 className="text-5xl font-bold text-green-600">

            Booking Successful!

          </h1>

          <p className="text-gray-500 mt-3">

            Thank you for choosing LuxeStay.

          </p>

        </div>

        <div className="mt-10 border rounded-2xl p-8">

          <h2 className="text-2xl font-bold mb-6">

            Booking Details

          </h2>

          <div className="grid grid-cols-2 gap-y-5">

            <span className="font-semibold">
              Booking ID
            </span>

            <span>
              {latestBooking.bookingId}
            </span>

            <span className="font-semibold">
              Resort
            </span>

            <span>
              {latestBooking.resortName}
            </span>

            <span className="font-semibold">
              Room
            </span>

            <span>
              {latestBooking.roomType}
            </span>

            <span className="font-semibold">
              Check In
            </span>

            <span>
              {latestBooking.checkIn}
            </span>

            <span className="font-semibold">
              Check Out
            </span>

            <span>
              {latestBooking.checkOut}
            </span>

            <span className="font-semibold">
              Guests
            </span>

            <span>
              {latestBooking.guests}
            </span>

            <span className="font-semibold">
              Nights
            </span>

            <span>
              {latestBooking.nights}
            </span>

            <span className="font-semibold">
              Payment Method
            </span>

            <span>
              {latestBooking.paymentMethod}
            </span>

            <span className="font-semibold">
              Status
            </span>

            <span className="text-green-600 font-bold">
              {latestBooking.status}
            </span>

          </div>

          <hr className="my-8" />

          <div className="flex justify-between items-center">

            <h2 className="text-3xl font-bold">

              Total Paid

            </h2>

            <h2 className="text-4xl font-bold text-green-600">

              ₹{latestBooking.totalAmount}

            </h2>

          </div>

        </div>

        <div className="flex gap-5 mt-10">

          <button
            onClick={() =>
              navigate("/my-bookings")
            }
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold"
          >

            View My Bookings

          </button>

          <button
            onClick={() =>
              navigate("/")
            }
            className="flex-1 bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold"
          >

            Back To Home

          </button>

        </div>

      </div>

    </div>
  );
}

export default BookingSuccess;