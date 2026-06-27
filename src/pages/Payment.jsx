
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  

  const [paymentMethod, setPaymentMethod] =
    useState("upi");

  const [loading, setLoading] =
    useState(false);

  // UPI

  const [upiId, setUpiId] =
    useState("");

  // Card

  const [cardName, setCardName] =
    useState("");

  const [cardNumber, setCardNumber] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  // Net Banking

  const [bank, setBank] =
    useState("");

  const handlePayment = () => {

    // UPI Validation

    if (paymentMethod === "upi") {

      if (!upiId.trim()) {
        alert("Enter UPI ID");
        return;
      }

      if (!upiId.includes("@")) {
        alert("Invalid UPI ID");
        return;
      }

    }

    // Credit / Debit Validation

    if (
      paymentMethod === "credit" ||
      paymentMethod === "debit"
    ) {

      if (
        !cardName ||
        !cardNumber ||
        !expiry ||
        !cvv
      ) {
        alert("Fill all card details");
        return;
      }

      if (
        cardNumber.length !== 16
      ) {
        alert(
          "Card Number should be 16 digits"
        );
        return;
      }

      if (
        cvv.length !== 3
      ) {
        alert(
          "CVV should be 3 digits"
        );
        return;
      }

    }

    // Net Banking

    if (
      paymentMethod ===
        "netbanking" &&
      bank === ""
    ) {

      alert("Select Bank");

      return;

    }

    setLoading(true);
          setTimeout(() => {

  setLoading(false);

  const pendingBooking = JSON.parse(
    localStorage.getItem("pendingBooking")
  );
  if (!pendingBooking) {
  alert("Pending Booking Missing");
  console.log(localStorage.getItem("pendingBooking"));
  return;
}
console.log("Pending Booking:", pendingBooking);
  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const bookingData = {
    bookingId: "BK" + Date.now(),

    resortName: pendingBooking.resortName,

    roomType: pendingBooking.roomType,

    checkIn: pendingBooking.checkIn,

    checkOut: pendingBooking.checkOut,

    guests: pendingBooking.guests,

    nights: pendingBooking.nights,

    totalAmount: pendingBooking.totalAmount,

    paymentMethod: paymentMethod,

    status: "Confirmed",
  };

  localStorage.setItem(
    "bookings",
    JSON.stringify([
      ...existingBookings,
      bookingData,
    ])
  );

  localStorage.removeItem("pendingBooking");

  alert("Payment Successful");

  navigate("/booking-success");

}, 2000);
  }
    
  return (

    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-3xl mx-auto">

        <div className="bg-white shadow-xl rounded-3xl p-10">

          <h1 className="text-4xl font-bold text-center mb-3">

            Secure Payment

          </h1>

          <p className="text-center text-gray-500 mb-8">

            Complete your payment securely.

          </p>

          {/* Payment Method */}

                    <div className="grid grid-cols-2 gap-4 mb-8">

            <button
              onClick={() => setPaymentMethod("upi")}
              className={`border-2 rounded-xl p-4 font-semibold transition ${
                paymentMethod === "upi"
                  ? "border-green-600 bg-green-100"
                  : "border-gray-300"
              }`}
            >
              📱 UPI
            </button>

            <button
              onClick={() => setPaymentMethod("credit")}
              className={`border-2 rounded-xl p-4 font-semibold transition ${
                paymentMethod === "credit"
                  ? "border-blue-600 bg-blue-100"
                  : "border-gray-300"
              }`}
            >
              💳 Credit Card
            </button>

            <button
              onClick={() => setPaymentMethod("debit")}
              className={`border-2 rounded-xl p-4 font-semibold transition ${
                paymentMethod === "debit"
                  ? "border-purple-600 bg-purple-100"
                  : "border-gray-300"
              }`}
            >
              💳 Debit Card
            </button>

            <button
              onClick={() => setPaymentMethod("netbanking")}
              className={`border-2 rounded-xl p-4 font-semibold transition ${
                paymentMethod === "netbanking"
                  ? "border-orange-600 bg-orange-100"
                  : "border-gray-300"
              }`}
            >
              🏦 Net Banking
            </button>

          </div>

          {/* UPI */}

          {paymentMethod === "upi" && (

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Enter UPI ID"
                value={upiId}
                onChange={(e) =>
                  setUpiId(e.target.value)
                }
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
              />

            </div>

          )}

          {/* Credit / Debit */}

          {(paymentMethod === "credit" ||
            paymentMethod === "debit") && (

            <div className="space-y-5">

             

              <input
                type="type"
                maxLength="16"
                placeholder="Card Number"
                value={cardNumber}
                onChange={(e) =>
                  setCardNumber(
                    e.target.value.replace(/\D/g, "")
                  )
                }
                className="w-full border rounded-xl p-4"
              />
               <input
                type="text"
                placeholder="Card Holder Name"
                value={cardName}
                onChange={(e) =>
                  setCardName(e.target.value)
                }
                className="w-full border rounded-xl p-4"
              />

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="month"
                  value={expiry}
                  onChange={(e) =>
                    setExpiry(e.target.value)
                  }
                  className="border rounded-xl p-4"
                />

                <input
                  type="password"
                  maxLength="3"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) =>
                    setCvv(
                      e.target.value.replace(/\D/g, "")
                    )
                  }
                  className="border rounded-xl p-4"
                />

              </div>

            </div>

          )}

          {/* Net Banking */}

          {paymentMethod === "netbanking" && (

            <select
              value={bank}
              onChange={(e) =>
                setBank(e.target.value)
              }
              className="w-full border rounded-xl p-4"
            >

              <option value="">
                Select Bank
              </option>

              <option>State Bank of India</option>

              <option>HDFC Bank</option>

              <option>ICICI Bank</option>

              <option>Axis Bank</option>

              <option>Canara Bank</option>

              <option>Indian Bank</option>

            </select>

          )}

          <div className="mt-10"></div>
                    <div className="bg-gray-100 rounded-xl p-4 mb-6">

            <h3 className="font-semibold text-lg mb-2">
              🔒 Secure Payment
            </h3>

            <p className="text-gray-600 text-sm">
              Your payment is encrypted and securely processed.
              We do not store your card or UPI details.
            </p>

          </div>

          <button
            onClick={handlePayment}
            disabled={loading}
            className={`w-full py-4 rounded-xl text-white text-lg font-bold transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {loading ? "Processing Payment..." : "Pay Now"}
          </button>

          <p className="text-center text-gray-500 text-sm mt-5">
            🔐 100% Secure Payment | SSL Protected
          </p>

        </div>

      </div>

    </div>
  );
}

export default Payment;