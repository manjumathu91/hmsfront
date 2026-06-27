import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Resorts from "../pages/Resorts";
import ResortDetails from "../pages/ResortDetails";
import Booking from "../pages/Booking";
import MyBookings from "../pages/MyBookings";
import Rooms from "../pages/Rooms";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Profile from "../pages/Profile";
import BookingSuccess from "../pages/BookingSuccess";
import AdminLayout from "../admin/AdminLayout";
import Dashboard from "../admin/Dashboard";
import AdminLogin from "../admin/AdminLogin";
import Hotels from "../admin/Hotels";
import AdminRooms from "../admin/AdminRooms";
import Bookings from "../admin/Bookings";
import Users from "../admin/Users";
import Payment from "../pages/Payment";
import Contact from "../pages/Contact";
import Reports from "../admin/Reports";
import AddHotel from "../admin/AddHotel";
import Settings from "../admin/Settings";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/resorts" element={<Resorts />} />
      <Route
  path="/resorts/:id"
  element={<ResortDetails />}
/>

<Route
  path="/booking/:id"
  element={<Booking />}
/>
<Route
  path="/booking/:resortId/:roomId"
  element={<Booking />}
/>
<Route path="/payment" element={<Payment />} />
      
        <Route
  path="/booking-success"
  element={<BookingSuccess />}
/>
<Route
  path="/rooms/:id"
  element={<Rooms />}
/>
<Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>
      <Route path="/my-bookings" element={<MyBookings />} />
       <Route path="/resorts/:id" element={<ResortDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route
  path="/contact"
  element={<Contact />}
/>
        <Route path="/admin" element={<AdminLayout />}>
  <Route path="dashboard" element={<Dashboard />} />
  <Route path="reports" element={<Reports />} />
  <Route path="/admin/add-hotel" element={<AddHotel />} />
  <Route path="hotels" element={<Hotels />} />
  <Route
  path="/admin/settings"
  element={<Settings />}
/>
  <Route path="rooms" element={<AdminRooms />} />
  <Route path="bookings" element={<Bookings />} />
  <Route path="users" element={<Users />} />
</Route>

<Route path="/admin-login" element={<AdminLogin />} />
</Routes>
  );
}

export default AppRoutes;