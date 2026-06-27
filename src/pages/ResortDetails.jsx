import { useParams } from "react-router-dom";
import { resorts } from "../data/resorts";
import { Link } from "react-router-dom";

function ResortDetails() {
  const { id } = useParams();

  const resort = resorts.find(
    (item) => item.id === Number(id)
  );

  if (!resort) {
    return (
      <div className="text-center mt-20 text-3xl font-bold">
        Resort Not Found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* Resort Image */}
      <img
        src={resort.image}
        alt={resort.name}
        className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
      />

      {/* Resort Info */}
      <div className="mt-8">

        <h1 className="text-4xl font-bold mb-3">
          {resort.name}
        </h1>

        <p className="text-gray-600 text-lg mb-2">
          📍 {resort.location}
        </p>

        <p className="text-yellow-500 text-lg mb-2">
          ⭐ {resort.rating}
        </p>

        <p className="text-2xl font-bold text-blue-600 mb-6">
          ₹{resort.pricePerNight} / night
        </p>

        <div className="bg-gray-100 p-6 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-3">
            About This Resort
          </h2>

         <p className="text-gray-700 leading-7">
  {resort.description}
</p>
        </div>
<h2 className="text-2xl font-semibold mt-8 mb-4">
  Amenities
</h2>
        <div className="grid md:grid-cols-3 gap-4">
  {resort.amenities.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow p-4 rounded-xl"
    >
      ✅ {item}
    </div>
  ))}
</div>

        {/* Book Button */}
        <Link to={`/rooms/${resort.id}`}>
  <button className="mt-10 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition-all duration-300">
    Check Availability
  </button>
</Link>
      </div>
    </div>
  );
}

export default ResortDetails;