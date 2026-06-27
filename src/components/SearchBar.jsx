import { useState } from "react";
import { useNavigate } from "react-router-dom";



export default function SearchBar() {
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");


  const navigate = useNavigate();

const handleSearch = () => {
  navigate(`/resorts?location=${location}`);
};
  return (
    <div
      className="
      relative z-20
      max-w-6xl mx-auto
       mx-auto
      -mt-20
      bg-white/95 backdrop-blur-md
      shadow-2xl
      p-6
      rounded-3xl
      flex flex-wrap items-center justify-center gap-4
      transition-all duration-300
      "
    >
      <input
        type="text"
        placeholder="Where are you going?"
             value={location}
  onChange={(e) => setLocation(e.target.value)}
        className="
        h-14
        border
        px-4
        rounded-xl
        w-52
        focus:ring-2 focus:ring-blue-500
        "
      />

      <input
        type="date"
                    value={checkIn}
  onChange={(e) => setCheckIn(e.target.value)}
  min={new Date().toISOString().split("T")[0]}
  required
        className="
        h-14
        border
        px-4
        rounded-xl
        w-44
        focus:ring-2 focus:ring-blue-500
        "
      />

      <input
        type="date"
                  value={checkOut}
  onChange={(e) => setCheckOut(e.target.value)}
  min={checkIn || new Date().toISOString().split("T")[0]}
  required
        className="
        h-14
        border
        px-4
        rounded-xl
        w-44
        focus:ring-2 focus:ring-blue-500
        "
      />

      <input
        type="number"
        placeholder="Guests"
        className="
        h-14
        border
        px-4
        rounded-xl
        w-40
        focus:ring-2 focus:ring-blue-500
        "
      />

      <button onClick={handleSearch}
        className="
        h-14
        px-8
        rounded-2xl
        bg-gradient-to-r from-blue-600 to-purple-600
        text-white
        font-semibold
        hover:scale-105
        transition-all duration-300
        "
      >
        Search
      </button>
    </div>
  );
}