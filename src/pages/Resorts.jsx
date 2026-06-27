import { useState } from "react";
import { resorts } from "../data/resorts";
import ResortCard from "../components/ResortCard";
import { useSearchParams } from "react-router-dom";

function Resorts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRating, setSelectedRating] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [searchParams] = useSearchParams();

const location = searchParams.get("location") || "";

  const filteredResorts = resorts.filter((resort) => {
  const categoryMatch =
    selectedCategory === "All" ||
    resort.category === selectedCategory;

  const ratingMatch =
    selectedRating === "All" ||
    (selectedRating === "5" && resort.rating >= 4.8) ||
    (selectedRating === "4" && resort.rating >= 4);

  const priceMatch =
    selectedPrice === "All" ||
    (selectedPrice === "under10k" &&
      resort.pricePerNight < 10000) ||
    (selectedPrice === "10kto15k" &&
      resort.pricePerNight >= 10000 &&
      resort.pricePerNight <= 15000) ||
    (selectedPrice === "above15k" &&
      resort.pricePerNight > 15000);
      const locationMatch =
    location === "" ||
    resort.location
      .toLowerCase()
      .includes(location.toLowerCase());

  
      return (
    categoryMatch &&
    ratingMatch &&
    priceMatch &&
    locationMatch
  );
});
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      <h1 className="text-4xl font-bold text-center mb-8">
        Explore Resorts
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">

        <button
          onClick={() => setSelectedCategory("All")}
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "All"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          All
        </button>

        <button
          onClick={() => setSelectedCategory("Beach")}
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "Beach"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Beach
        </button>

        <button
          onClick={() => setSelectedCategory("Mountain")}
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "Mountain"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Mountain
        </button>

        <button
          onClick={() => setSelectedCategory("Nature")}
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "Nature"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Nature
        </button>

        <button
          onClick={() => setSelectedCategory("Luxury")}
          className={`px-5 py-2 rounded-full ${
            selectedCategory === "Luxury"
              ? "bg-blue-600 text-white"
              : "bg-gray-200"
          }`}
        >
          Luxury
        </button>

      </div>

                     <div className="grid lg:grid-cols-4 gap-8">

  {/* Sidebar */}
  <div className="bg-white p-6 rounded-2xl shadow-lg h-fit">

    <h3 className="font-bold text-xl mb-4">
      Filters
    </h3>

    <h4 className="font-semibold mb-2">
      Category
    </h4>

    <select
      value={selectedCategory}
      onChange={(e) =>
        setSelectedCategory(e.target.value)
      }
      className="w-full border p-2 rounded-lg mb-4"
    >
      <option value="All">All</option>
      <option value="Beach">Beach</option>
      <option value="Mountain">Mountain</option>
      <option value="Nature">Nature</option>
      <option value="Luxury">Luxury</option>
    </select>

    <h4 className="font-semibold mb-2">
      Rating
    </h4>

    <select
      value={selectedRating}
      onChange={(e) =>
        setSelectedRating(e.target.value)
      }
      className="w-full border p-2 rounded-lg mb-4"
    >
      <option value="All">All Ratings</option>
      <option value="5">5 Star</option>
      <option value="4">4 Star & Above</option>
    </select>

    <h4 className="font-semibold mb-2">
      Price
    </h4>

    <select
      value={selectedPrice}
      onChange={(e) =>
        setSelectedPrice(e.target.value)
      }
      className="w-full border p-2 rounded-lg"
    >
      <option value="All">All Prices</option>
      <option value="under10k">Under ₹10,000</option>
      <option value="10kto15k">₹10,000 - ₹15,000</option>
      <option value="above15k">Above ₹15,000</option>
    </select>

  </div>
{/* Cards */}
<div className="lg:col-span-3">

  <p className="mb-4 text-gray-500">
    {filteredResorts.length} Resorts Found
  </p>

  {filteredResorts.length === 0 ? (
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold">
        No Resorts Found
      </h2>

      <p className="text-gray-500 mt-2">
        Try another location
      </p>
    </div>
  ) : (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredResorts.map((resort) => (
        <ResortCard
          key={resort.id}
          resort={resort}
        />
      ))}
    </div>
  )}

</div>
</div>

</div>
);
}

export default Resorts;
  

