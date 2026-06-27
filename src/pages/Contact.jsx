import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Contact() {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-5">

    <div className="max-w-6xl mx-auto">

      <h1 className="text-5xl font-bold text-center text-gray-800 mb-3">
        Contact Us
      </h1>

      <p className="text-center text-gray-500 mb-12">
        We'd love to hear from you. Send us your questions or feedback.
      </p>

      <div className="grid lg:grid-cols-2 gap-10">

        {/* Contact Details */}

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            Get In Touch
          </h2>

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <div className="text-3xl">📍</div>

              <div>
                <h3 className="font-bold text-lg">
                  Address
                </h3>

                <p className="text-gray-500">
                  LuxeStay Resort
                  <br />
                  ECR Road
                  <br />
                  Chennai - 600001
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">📞</div>

              <div>
                <h3 className="font-bold text-lg">
                  Phone
                </h3>

                <p className="text-gray-500">
                  +91 98765 43210
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">📧</div>

              <div>
                <h3 className="font-bold text-lg">
                  Email
                </h3>

                <p className="text-gray-500">
                  support@luxestay.com
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl">🕒</div>

              <div>
                <h3 className="font-bold text-lg">
                  Working Hours
                </h3>

                <p className="text-gray-500">
                  Monday - Sunday
                  <br />
                  9:00 AM - 9:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Contact Form Starts Here */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

  <h2 className="text-3xl font-bold text-purple-600 mb-8">
    Send Message
  </h2>

  <form
    onSubmit={handleSubmit}
    className="space-y-5"
  >

    <input
      type="text"
      name="name"
      placeholder="Full Name"
      value={formData.name}
      onChange={handleChange}
      className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
    />

    <input
      type="email"
      name="email"
      placeholder="Email Address"
      value={formData.email}
      onChange={handleChange}
      className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
    />

    <input
      type="text"
      name="subject"
      placeholder="Subject"
      value={formData.subject}
      onChange={handleChange}
      className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
    />

    <textarea
      rows="5"
      name="message"
      placeholder="Write your message..."
      value={formData.message}
      onChange={handleChange}
      className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-blue-500 outline-none"
    ></textarea>

    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl hover:from-purple-600 hover:to-pink-500 transition duration-300 font-semibold"
    >
      Send Message
    </button>

  </form>

</div>

</div>

{/* Google Map */}

<div className="mt-16">

  <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
    Find Us On Map
  </h2>

  <div className="rounded-3xl overflow-hidden shadow-2xl">

    <iframe
      title="LuxeStay Location"
      src="https://www.google.com/maps?q=Chennai&output=embed"
      width="100%"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    ></iframe>

  </div>

</div>

{/* Contact Banner */}

<div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-10 text-center text-white">

  <h2 className="text-4xl font-bold mb-4">
    Ready for Your Dream Vacation?
  </h2>

  <p className="text-lg text-blue-100 mb-6">
    Contact our team today and let us help you plan the perfect stay at LuxeStay Resort.
  </p>

  <button
  onClick={() => navigate("/resorts")}
    className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-full hover:scale-105 transition duration-300"
  >
    Book Your Stay
  </button>

</div>

    </div>
  </div>
</>
);
}