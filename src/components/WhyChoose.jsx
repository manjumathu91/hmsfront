export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: "🏝",
      title: "Premium Resorts",
      description:
        "Stay at handpicked luxury resorts with world-class facilities and breathtaking views.",
    },
    {
      id: 2,
      icon: "💰",
      title: "Best Price Guarantee",
      description:
        "Enjoy the best deals and affordable prices without compromising on quality.",
    },
    {
      id: 3,
      icon: "🛎",
      title: "24/7 Customer Support",
      description:
        "Our support team is always available to help you with bookings and queries.",
    },
    {
      id: 4,
      icon: "🔒",
      title: "Secure Payments",
      description:
        "Book confidently with our safe and secure online payment system.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800">
            Why Choose LuxeStay?
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            We provide a premium booking experience with luxury,
            comfort, and trusted service.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-3xl shadow-lg p-8 text-center
              hover:-translate-y-2 hover:shadow-2xl
              transition-all duration-300"
            >
              <div className="text-6xl mb-5">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}