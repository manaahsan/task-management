import { Nav } from "@/components/shared/Nav";
import { CustomSheet } from "@/components/shared/Sheet";
import { useAppContext } from "@/context/AppContext";
import { useEffect } from "react";

export function Sidebar() {
  const { isSheetOpen, setIsSheetOpen } = useAppContext();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && isSheetOpen) {
        setIsSheetOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [isSheetOpen, setIsSheetOpen]);
  return (
    <aside className="w-64 h-screen hidden md:flex flex-col border-r bg-white dark:bg-neutral-950 p-4">
      <h2 className="text-2xl font-bold mb-6">⚙️ TechBoard</h2>

      <Nav />
      <CustomSheet />
    </aside>
  );
}
