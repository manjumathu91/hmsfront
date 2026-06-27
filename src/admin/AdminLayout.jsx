import { useState } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { Menu } from "lucide-react";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Content */}
      <div className="flex-1 lg:ml-64">

        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between bg-white shadow-md px-4 py-4">

          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700"
          >
            <Menu size={28} />
          </button>

          <h1 className="text-xl font-bold text-blue-600">
            Admin Panel
          </h1>

          <div></div>
        </div>

        {/* Page Content */}
        <main className="p-6">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;