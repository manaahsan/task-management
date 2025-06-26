
import { Outlet } from "react-router-dom";

// components
import { Navbar } from "@/components/shared/Header";
import { Sidebar } from "@/components/shared/Sidebar";

export function MainLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
