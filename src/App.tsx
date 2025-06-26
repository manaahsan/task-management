import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// routes
import Onboarding from "@/pages/Onboarding";
import Dashboard from "@/pages/Dashboard";
import { MainLayout } from "@/layout/MainLayout";
import ProjectDetails from "@/pages/ProjectDetails";
import Projects from "@/pages/Projects";
import Tasks from "@/pages/Tasks";
import Kanban from "@/pages/Kanban";
import ProtectedRoute from "./components/shared/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone onboarding page */}
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Routes under main layout */}
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/kanban-board" element={<Kanban />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
