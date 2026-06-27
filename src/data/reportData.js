const reportData = {
  totalRevenue: 586450,

  monthlyRevenue: [
    { month: "Jan", revenue: 42000 },
    { month: "Feb", revenue: 51000 },
    { month: "Mar", revenue: 47000 },
    { month: "Apr", revenue: 69000 },
    { month: "May", revenue: 72000 },
    { month: "Jun", revenue: 84000 },
    { month: "Jul", revenue: 91000 },
    { month: "Aug", revenue: 78000 },
    { month: "Sep", revenue: 66000 },
    { month: "Oct", revenue: 82000 },
    { month: "Nov", revenue: 98000 },
    { month: "Dec", revenue: 106000 },
  ],

  roomTypes: [
    {
      room: "Standard",
      bookings: 120,
      revenue: 360000,
    },
    {
      room: "Deluxe",
      bookings: 95,
      revenue: 475000,
    },
    {
      room: "Suite",
      bookings: 42,
      revenue: 525000,
    },
    {
      room: "Presidential",
      bookings: 10,
      revenue: 350000,
    },
  ],

  topResorts: [
    {
      name: "Ocean Paradise",
      bookings: 145,
      revenue: 920000,
    },
    {
      name: "Mountain Escape",
      bookings: 120,
      revenue: 710000,
    },
    {
      name: "Luxury Hills",
      bookings: 95,
      revenue: 620000,
    },
    {
      name: "City Palace",
      bookings: 76,
      revenue: 510000,
    },
  ],

  paymentMethods: [
    {
      method: "Credit Card",
      count: 160,
    },
    {
      method: "UPI",
      count: 230,
    },
    {
      method: "Cash",
      count: 40,
    },
    {
      method: "Debit Card",
      count: 90,
    },
  ],
};

export default reportData;