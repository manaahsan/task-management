import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

// helper
import { navItems } from "@/lib/helper";
import { useAppContext } from "@/context/AppContext";

export const Nav = () => {
    const {setIsSheetOpen} = useAppContext();
    const location = useLocation();
  return (
    <nav className="flex flex-col gap-2">
      {navItems.map(({ name, path, icon: Icon }) => {
        const isActive = location.pathname.startsWith(path);

        return (
          <Link
            key={name}
            to={path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted transition-all",
              isActive && "bg-muted font-medium"
            )}
            onClick={()=> setIsSheetOpen(false)}
          >
            <Icon size={18} />
            <span>{name}</span>
          </Link>
        );
      })}
    </nav>
  );
};
