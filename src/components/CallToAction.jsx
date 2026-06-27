import { useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-6xl mx-auto text-center text-white">

        <h2 className="text-4xl md:text-5xl font-bold mb-5">
          Ready for Your Dream Vacation?
        </h2>

        <p className="text-lg md:text-xl text-blue-100 mb-10">
          Explore our luxury resorts and book your perfect getaway with
          LuxeStay today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5">

          <button
            onClick={() => navigate("/resorts")}
            className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:scale-105 transition duration-300"
          >
            🏝 Book Your Stay
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="border-2 border-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition duration-300"
          >
            📞 Contact Us
          </button>

        </div>

      </div>
    </section>
  );
}