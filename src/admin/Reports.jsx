import reportData from "../data/reportData";
import {
  DollarSign,
  CalendarDays,
  Hotel,
  Users,
} from "lucide-react";
function Reports() {
  const cards = [
    {
      title: "Total Revenue",
      value: `₹${reportData.totalRevenue.toLocaleString()}`,
      icon: <DollarSign size={28} />,
      color: "bg-green-500",
    },
    {
      title: "Total Bookings",
      value: "267",
      icon: <CalendarDays size={28} />,
      color: "bg-blue-500",
    },
    {
      title: "Top Resorts",
      value: reportData.topResorts.length,
      icon: <Hotel size={28} />,
      color: "bg-purple-500",
    },
    {
      title: "Customers",
      value: "184",
      icon: <Users size={28} />,
      color: "bg-orange-500",
    },
  ];

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Reports
        </h1>

        <p className="text-gray-500 mt-2">
          Revenue & Booking Analytics
        </p>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {cards.map((card, index) => (

          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex justify-between items-center hover:shadow-xl transition"
          >

            <div>

              <p className="text-gray-500">
                {card.title}
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {card.value}
              </h2>

            </div>

            <div
              className={`${card.color} text-white p-4 rounded-xl`}
            >
              {card.icon}
            </div>

          </div>
          

        ))}
        

      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

<h2 className="text-2xl font-bold mb-6">
Monthly Revenue
</h2>

<div className="space-y-5">

{[
{month:"Jan",amount:45000},
{month:"Feb",amount:52000},
{month:"Mar",amount:61000},
{month:"Apr",amount:72000},
{month:"May",amount:68000},
{month:"Jun",amount:80000},
].map((item)=>(
<div key={item.month}>

<div className="flex justify-between mb-2">
<span>{item.month}</span>
<span>₹{item.amount}</span>
</div>

<div className="w-full h-3 bg-gray-200 rounded-full">

<div
className="h-3 rounded-full bg-blue-600"
style={{
width:`${item.amount/1000}%`
}}
></div>

</div>

</div>
))}

</div>
<div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

<h2 className="text-2xl font-bold mb-5">
Top Resorts
</h2>

<table className="w-full">

<thead>

<tr className="border-b">

<th className="py-3 text-left">
Resort
</th>

<th>
Bookings
</th>

<th>
Revenue
</th>

</tr>

</thead>

<tbody>

<tr className="border-b">

<td>Beach Paradise</td>

<td>120</td>

<td>₹2,40,000</td>

</tr>

<tr className="border-b">

<td>Mountain View</td>

<td>95</td>

<td>₹1,80,000</td>

</tr>

<tr>

<td>Royal Palace</td>

<td>52</td>

<td>₹95,000</td>

</tr>

</tbody>

</table>

</div>
<div className="grid md:grid-cols-3 gap-5 mt-8">

<div className="bg-green-100 rounded-2xl p-6">

<h3 className="text-xl font-bold">
Confirmed
</h3>

<p className="text-4xl mt-3">
210
</p>

</div>

<div className="bg-yellow-100 rounded-2xl p-6">

<h3 className="text-xl font-bold">
Pending
</h3>

<p className="text-4xl mt-3">
35
</p>

</div>

<div className="bg-red-100 rounded-2xl p-6">

<h3 className="text-xl font-bold">
Cancelled
</h3>

<p className="text-4xl mt-3">
22
</p>

</div>

</div>
<div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

<h2 className="text-2xl font-bold mb-5">
Recent Payments
</h2>

<table className="w-full">

<thead>

<tr className="border-b">

<th>User</th>

<th>Amount</th>

<th>Method</th>

<th>Status</th>

</tr>

</thead>

<tbody>

<tr className="border-b">

<td>Rahul</td>

<td>₹12000</td>

<td>UPI</td>

<td className="text-green-600">
Paid
</td>

</tr>

<tr>

<td>Priya</td>

<td>₹9500</td>

<td>Card</td>

<td className="text-green-600">
Paid
</td>

</tr>

</tbody>

</table>

</div>

</div>

    </div>
  );
}

export default Reports;