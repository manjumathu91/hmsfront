import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { resorts } from "../data/resorts";
import { rooms } from "../data/rooms";

function Booking() {
  const { resortId, roomId } = useParams();
  const navigate = useNavigate();

  const resort = resorts.find(
    (item) => item.id === Number(resortId)
  );

  const room = rooms.find(
    (item) => item.id === Number(roomId)
  );

  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  if (!resort) {
    return <h1 className="text-center mt-10">Resort Not Found</h1>;
  }

  if (!room) {
    return <h1 className="text-center mt-10">Room Not Found</h1>;
  }

  const nights =
    checkIn && checkOut
      ? Math.ceil(
          (new Date(checkOut) - new Date(checkIn)) /
            (1000 * 60 * 60 * 24)
        )
      : 0;

  const handleBooking = (e) => {
    e.preventDefault();

    if (name.trim().length < 3) {
      alert("Enter a valid name");
      return;
    }

    if (!guests) {
      alert("Enter number of guests");
      return;
    }

    if (Number(guests) < 1 || Number(guests) > room.capacity) {
      alert(`Maximum ${room.capacity} guests allowed`);
      return;
    }

    if (!checkIn) {
      alert("Select Check In Date");
      return;
    }

    if (!checkOut) {
      alert("Select Check Out Date");
      return;
    }

    if (new Date(checkOut) <= new Date(checkIn)) {
      alert("Check Out should be after Check In");
      return;
    }

    const booking = {
      bookingId: "BK" + Date.now(),

      resortId: resort.id,
      resortName: resort.name,
      location: resort.location,

      roomId: room.id,
      roomType: room.roomType,
      roomPrice: room.price,

      name: name,
      guests: Number(guests),

      checkIn,
      checkOut,

      nights,

      totalAmount: room.price * nights,
    };

    console.log("Booking Saved:", booking);

    localStorage.setItem(
      "pendingBooking",
      JSON.stringify(booking)
    );

    navigate("/payment");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold mb-2">
        Book Your Stay
      </h1>

      <p className="text-gray-500 mb-8">
        {resort.name} - {resort.location}
      </p>

      <form
        onSubmit={handleBooking}
        className="bg-white shadow-xl rounded-3xl p-8"
      >

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-3 rounded-xl"
              placeholder="Enter Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Guests
            </label>

            <input
              type="number"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border p-3 rounded-xl"
              min="1"
              max={room.capacity}
              placeholder={`Max ${room.capacity}`}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Check In
            </label>

            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full border p-3 rounded-xl"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Check Out
            </label>

            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              min={checkIn || new Date().toISOString().split("T")[0]}
              className="w-full border p-3 rounded-xl"
            />
          </div>

        </div>

        <div className="mt-8 bg-gray-100 rounded-xl p-5">

          <h3 className="font-semibold text-lg">
            Room Details
          </h3>

          <p>Room : {room.roomType}</p>

          <p>Price / Night : ₹{room.price}</p>

          {nights > 0 && (
            <>
              <p>Nights : {nights}</p>

              <p className="text-blue-600 font-bold text-xl mt-2">
                Total : ₹{room.price * nights}
              </p>
            </>
          )}

        </div>

        <button
          type="submit"
          className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all"
        >
          Confirm Booking
        </button>

      </form>

    </div>
  );
}

export default Booking;