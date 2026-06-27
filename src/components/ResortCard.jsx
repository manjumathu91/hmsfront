import { Link } from "react-router-dom";

function ResortCard({ resort }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      
      <img
        src={resort.image}
        alt={resort.name}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">
          {resort.name}
        </h3>

        <p className="text-gray-500 mb-2">
          📍 {resort.location}
        </p>

        <div className="flex justify-between items-center mb-4">
          <span className="text-yellow-500 font-semibold">
            ⭐ {resort.rating}
          </span>

          <span className="text-blue-600 font-bold">
            ₹{resort.price}/night
          </span>
        </div>

        <Link to={`/resorts/${resort.id}`}>
  <button
    className="
      w-full
      bg-gradient-to-r
      from-blue-600
      to-purple-600
      text-white
      py-3
      rounded-xl
      font-semibold
    "
  >
  View Details
  </button>
</Link>
      </div>
    </div>
  );
}

export default ResortCard;