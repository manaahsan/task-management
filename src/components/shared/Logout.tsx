import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

// ui
import { Button } from "@/components/ui/button";

export const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    document.cookie = "logged_in=; path=/; max-age=0";

    navigate("/onboarding");
  };
  return (
    <Button
      onClick={handleLogout}
      variant="outline"
      className="bg-neutral-200 dark:bg-neutral-700"
    >
      <LogOut className="w-4 h-4 mr-2" />
      Logout
    </Button>
  );
};
