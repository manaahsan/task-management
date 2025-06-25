import { Menu } from "lucide-react";

// components
import { ThemeToggle } from "@/components/shared/ThemeToggle";
// useContext
import { useAppContext } from "@/context/AppContext";

export function Navbar() {

  return (
    <header className="h-16 w-full flex items-center justify-between px-4 border-b bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2">
        <Menu className="md:hidden" />
        <h1 className="text-lg font-semibold">Technician Dashboard</h1>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
