import { Navigate } from "react-router-dom";
import { isLoggedIn } from "@/utils/auth";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  if (!isLoggedIn()) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
}
