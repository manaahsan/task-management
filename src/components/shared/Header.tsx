import { Menu } from "lucide-react";

// components
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Logout } from "@/components/shared/Logout";

// useContext
import { useAppContext } from "@/context/AppContext";

export function Navbar() {
  const { setIsSheetOpen } = useAppContext();

  return (
    <header className="h-16 w-full flex items-center justify-between px-4 border-b bg-white dark:bg-neutral-900">
      <div className="flex items-center gap-2">
        <Menu className="md:hidden" onClick={() => setIsSheetOpen(true)} />
        <h1 className="text-lg font-semibold">Technician Dashboard</h1>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
        <div className="hidden md:block">
          <Logout />
        </div>
      </div>
    </header>
  );
}
