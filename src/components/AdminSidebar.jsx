import { useEffect, useState } from "react";
import { NavLink, useNavigate,Link } from "react-router-dom";
import { X } from "lucide-react";

function AdminSidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    navigate("/admin-login");
  };
  
const [admin, setAdmin] = useState({
  name: "Admin",
});

useEffect(() => {
  const loadProfile = () => {
    const savedProfile = JSON.parse(
      localStorage.getItem("adminProfile")
    );

    if (savedProfile) {
      setAdmin(savedProfile);
    }
  };

  loadProfile();

  window.addEventListener("storage", loadProfile);

  return () => {
    window.removeEventListener("storage", loadProfile);
  };
}, []);


  const menus = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: "📊",
    },
    {
      name: "Reports",
      path: "/admin/reports",
      icon: "🏨",
    },
    
    {
      name: "Hotels",
      path: "/admin/hotels",
      icon: "🛏",
    },
    {
      name: "Bookings",
      path: "/admin/bookings",
      icon: "📅",
    },
    {
      name: "Customers",
      path: "/admin/users",
      icon: "👤",
    },
  ];

  return (
    <>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-gradient-to-b from-blue-700 to-blue-900 text-white z-50 transform transition-transform duration-300
        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }
        lg:translate-x-0 lg:fixed`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-blue-500">

          <h1 className="text-2xl font-bold">
             🏝 LuxeStay
          </h1>

          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X size={28} />
          </button>

        </div>

        {/* Profile */}
        <div className="p-5 border-b border-blue-500">

          <h2 className="text-xl font-bold text-white">
 Welcome {admin.name}
</h2>

        </div>

        {/* Menu */}
        <div className="mt-5 flex flex-col">

          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
               end={menu.path === "/admin/dashboard"}
              onClick={() => setSidebarOpen(false)}
              className={({ isActive }) =>
                `mx-3 my-1 rounded-lg px-4 py-3 flex items-center gap-3 transition-all
                ${
                  isActive
                    ? "bg-white text-blue-700 font-bold"
                    : "hover:bg-blue-600"
                }`
              }
            >
              <span className="text-xl">
                {menu.icon}
              </span>

              {menu.name}
            </NavLink>
          ))}

        </div>
        

        {/* Logout */}
        <div className="absolute bottom-5 w-full px-3 text-2xl">

          <Link to="/admin/settings">
  ⚙ Settings
</Link>
        </div>

      </aside>
    </>
  );
}

export default AdminSidebar;