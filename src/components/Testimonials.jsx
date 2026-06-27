export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Priya S",
      location: "Chennai",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "Amazing experience! The resort was clean, luxurious, and the staff were very friendly. Highly recommended.",
      image: "👩",
    },
    {
      id: 2,
      name: "Arun K",
      location: "Coimbatore",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "Booking was very easy and secure. The rooms were beautiful and the food was excellent.",
      image: "👨",
    },
    {
      id: 3,
      name: "Keerthana R",
      location: "Madurai",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "One of the best resort stays I've ever had. Perfect place for a family vacation.",
      image: "👩‍💼",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-800">
            What Our Guests Say
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Thousands of happy customers have trusted LuxeStay for their dream vacation.
          </p>

        </div>

        {/* Review Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="bg-gray-50 rounded-3xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              <div className="text-6xl text-center mb-5">
                {review.image}
              </div>

              <h3 className="text-2xl font-bold text-center">
                {review.name}
              </h3>

              <p className="text-center text-gray-500 mb-3">
                {review.location}
              </p>

              <p className="text-center text-yellow-500 text-xl mb-4">
                {review.rating}
              </p>

              <p className="text-gray-600 text-center leading-7">
                "{review.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}