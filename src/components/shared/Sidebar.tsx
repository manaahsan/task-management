import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FolderKanban, ListTodo, KanbanSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Tasks", path: "/tasks", icon: ListTodo },
  { name: "Kanban", path: "/kanban", icon: KanbanSquare },

];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 h-screen hidden md:flex flex-col border-r bg-white dark:bg-neutral-950 p-4">
      <h2 className="text-2xl font-bold mb-6">⚙️ TechBoard</h2>
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
            >
              <Icon size={18} />
              <span>{name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
