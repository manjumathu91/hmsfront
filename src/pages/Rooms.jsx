import { useParams, Link } from "react-router-dom";
import { resorts } from "../data/resorts";
import { rooms } from "../data/rooms";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Rooms() {
  const { id } = useParams();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("");
  const [searched, setSearched] = useState(false);
  const isLoggedIn = localStorage.getItem("user");
  
const navigate = useNavigate();
  const resort = resorts.find(
    (item) => item.id === Number(id)
  );
  

  const resortRooms = rooms.filter(
    (room) => room.resortId === Number(id)
  );
  
const [filteredRooms, setFilteredRooms] =
  useState([]);

  if (!resort) {
    return (
      <h1 className="text-center text-3xl mt-20">
        Resort Not Found
      </h1>
    );
  }
  useEffect(() => {
  setFilteredRooms(resortRooms);
}, [id]);
const handleSearch = () => {
  if (!checkIn || !checkOut) {
    alert("Select dates");
    return;
  }

  if (checkOut <= checkIn) {
    alert("Check Out must be after Check In");
    return;
  }
  const result = resortRooms.filter(
    (room) =>
      room.capacity >= Number(guests) &&
      room.availableRooms > 0
  );
console.log(result);
setFilteredRooms(result);
setSearched(true);
};
const nights =
  checkIn && checkOut
    ? Math.ceil(
        (new Date(checkOut) - new Date(checkIn)) /
          (1000 * 60 * 60 * 24)
      )
    : 0;
    
    const handleBookNow = (roomId) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("User:", user);
  if (!searched) {
    alert("Please search available rooms first");
    return;
  }
if (!user) {
  // Booking details save pannuvom
  localStorage.setItem(
    "pendingBooking",
    JSON.stringify({
      resortId: resort.id,
      roomId,checkIn,
      checkOut,
      guests,
      nights,
    })
  );

  // Always Login page
  navigate("/login");
  return;
}

 navigate(`/booking/${resort.id}/${roomId}`);
};

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Resort Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          {resort.name}
        </h1>

        <p className="text-gray-500">
          📍 {resort.location}
        </p>

        <p className="text-green-600 font-semibold mt-2">
          ✅ Rooms Available
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 mb-10">

        <div className="grid md:grid-cols-4 gap-4">
               <input
  type="date"
  value={checkIn}
  onChange={(e) => {
    setCheckIn(e.target.value);
    setSearched(false);
  }}
  min={new Date().toISOString().split("T")[0]}
  className="border p-3 rounded-xl"
/>
          
<input
  type="date"
  value={checkOut}
  onChange={(e) => {
    setCheckOut(e.target.value);
    setSearched(false);
  }}
  min={checkIn}
  className="border p-3 rounded-xl"
/>

         <input
  type="number"
  placeholder="Guests"
  min="1"
  value={guests}
  onChange={(e) => {
    setGuests(e.target.value);
    setSearched(false);
  }}
  className="border p-3 rounded-xl"
/>
          

          <button onClick={handleSearch}
            className="
            bg-gradient-to-r
            from-blue-600
            to-purple-600
            text-white
            rounded-xl
            font-semibold"
          >
            Search Rooms
          </button>

        </div>

      </div>
      {searched && (
  <div className="bg-green-100 p-4 rounded-xl mb-6">
    <h3 className="font-semibold">
      {nights} Night(s) Selected
    </h3>
  </div>
)}

      {/* Rooms Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="
            bg-white
            rounded-2xl
            overflow-hidden
            shadow-lg
            hover:shadow-2xl
            transition-all
            duration-300"
          >

            <img
              src={room.image}
              alt={room.roomType}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">

              <h2 className="text-2xl font-bold mb-3">
                {room.roomType}
              </h2>

              <p className="text-gray-500 mb-2">
                👤 Capacity: {room.capacity} Guests
              </p>

              <p className="text-gray-500 mb-2">
                📶 Free WiFi
              </p>

              <p className="text-gray-500 mb-2">
                🍽 Complimentary Breakfast
              </p>

              <p className="text-gray-500 mb-4">
                ❄ Air Conditioning
              </p>
              {room.availableRooms > 0 ? (
  <p className="text-green-600 font-semibold mb-3">
    ✅ {room.availableRooms} Rooms Left
  </p>
) : (
  <p className="text-red-600 font-semibold mb-3">
    ❌ Not Available
  </p>
)}


              <p className="text-blue-600 text-2xl font-bold mb-5">
                ₹{room.price}
              </p>
              {searched && (
  <p className="text-green-600 font-semibold">
    Total: ₹{room.price * nights}
  </p>
)}

              {room.availableRooms > 0 ? (
  searched ? (
    <button
      onClick={() => handleBookNow(room.id)}
      className="w-full bg-blue-600 text-white py-3 rounded-xl"
    >
      Book Now
    </button>
  ) : (
    <button
      disabled
      className="w-full bg-gray-400 text-white py-3 rounded-xl cursor-not-allowed"
    >
      Search Dates First
    </button>
  )
) : (
  <button
    disabled
    className="w-full bg-gray-400 text-white py-3 rounded-xl cursor-not-allowed"
  >
    Sold Out
  </button>
)}

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Rooms;