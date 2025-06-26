// src/pages/Onboarding.tsx
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Onboarding() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    document.cookie = "logged_in=true; path=/; max-age=86400";
    navigate("/projects");
  };

  return (
    <div className="flex items-center justify-center h-screen flex-col gap-4">
      <h1 className="text-3xl font-bold">Welcome to TechBoard</h1>
      <p className="text-gray-600 text-center max-w-md">
        Manage your technician projects and tasks in one intuitive dashboard.
      </p>
      <Button onClick={handleGetStarted}>Get Started</Button>
    </div>
  );
}
