import { resorts } from "../data/resorts";
import ResortCard from "./ResortCard";

function FeaturedResorts() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold text-center mb-3">
        Featured Resorts
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Discover our handpicked luxury resorts
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resorts.slice(0, 6).map((resort) => (
          <ResortCard
            key={resort.id}
            resort={resort}
          />
        ))}
      </div>

    </section>
  );
}

export default FeaturedResorts;