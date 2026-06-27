
import {
  Hotel,
  BedDouble,
  CalendarCheck,
  Users,
} from "lucide-react";

import { resorts } from "../data/resorts";
import { rooms } from "../data/rooms";

function Dashboard() {

  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  const users =
    JSON.parse(localStorage.getItem("users")) || [];

  const cards = [
    {
      title: "Hotels",
      value: resorts.length,
      icon: Hotel,
      color: "bg-blue-500",
    },
    {
      title: "Rooms",
      value: rooms.length,
      icon: BedDouble,
      color: "bg-green-500",
    },
    {
      title: "Bookings",
      value: bookings.length,
      icon: CalendarCheck,
      color: "bg-purple-500",
    },
    {
      title: "Users",
      value: users.length,
      icon: Users,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to LuxeStay Admin Panel
        </p>
      </div>

      {/* Cards */}

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6"
      >
        {cards.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={index}
              className="
              bg-white
              rounded-2xl
              shadow-md
              p-6
              flex
              justify-between
              items-center"
            >

              <div>

                <p className="text-gray-500">
                  {item.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>

              </div>

              <div
                className={`${item.color}
                p-4
                rounded-xl
                text-white`}
              >
                <Icon size={30} />
              </div>

            </div>

          );

        })}
      </div>

      {/* Recent Bookings */}

      <div
        className="
        bg-white
        rounded-2xl
        shadow-md
        p-6"
      >

        <h2
          className="
          text-2xl
          font-bold
          mb-6"
        >
          Recent Bookings
        </h2>

        {bookings.length === 0 ? (

          <p className="text-gray-500">
            No Bookings Found
          </p>

        ) : (

          <div className="overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b">

                  <th className="py-3 text-left">
                    Booking ID
                  </th>

                  <th className="py-3 text-left">
                    Resort
                  </th>

                  <th className="py-3 text-left">
                    Room
                  </th>

                  <th className="py-3 text-left">
                    Amount
                  </th>

                  <th className="py-3 text-left">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {bookings
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map((booking) => (

                    <tr
                      key={booking.bookingId}
                      className="border-b"
                    >

                      <td className="py-4">
                        {booking.bookingId}
                      </td>

                      <td>
                        {booking.resortName}
                      </td>

                      <td>
                        {booking.roomType}
                      </td>

                      <td>
                        ₹{booking.totalAmount}
                      </td>

                      <td>

                        <span
                          className="
                          bg-green-100
                          text-green-700
                          px-3
                          py-1
                          rounded-full
                          text-sm"
                        >
                          {booking.status}
                        </span>

                      </td>

                    </tr>

                  ))}

              </tbody>

            </table>

          </div>

        )}

      </div>

    </div>
  );
}

export default Dashboard;