import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "@/pages/Onboarding";
import Dashboard from "@/pages/Dashboard";
import { MainLayout } from "@/layout/MainLayout";
import ProjectDetails from "@/pages/ProjectDetails";
import Projects from "@/pages/Projects";
import Tasks from "./pages/Tasks";

function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone onboarding page */}
        <Route path="/onboarding" element={<Onboarding />} />

        {/* Routes under main layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/tasks" element={<Tasks />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
