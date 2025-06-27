import { createContext, useContext, useState } from "react";
import { type Range } from "react-date-range"

// helper
import { dummyProjects, mockTasks, project_tasks } from "@/lib/helper";

// types
import type { AppContextType, Project, Task } from "@/lib/types";

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [projects, setProjects] = useState<Project[]>(dummyProjects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [statusUpdateIsOpen, setStatusUpdateIsOpen] = useState(false);
  const [isProjectDetailsOpen, setIsProjectDetailsOpen] = useState(false);
  const [isAddProjectOpen, setIsAddProjectOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [projectIDTasks, setProjectIDTasks] = useState<Task[]>(project_tasks);
  const [tasks, setTasks] = useState(mockTasks);
  const [view, setView] = useState("list");
  const [statusFilter, setStatusFilter] = useState("all");
  const today = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(today.getDate() - 7);

  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: sevenDaysAgo,
      endDate: today,
      key: "selection",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        selectedProject,
        setSelectedProject,
        isTaskModalOpen,
        setIsTaskModalOpen,
        statusUpdateIsOpen,
        setStatusUpdateIsOpen,
        selectedTask,
        setSelectedTask,
        tasks,
        setTasks,
        isProjectDetailsOpen,
        setIsProjectDetailsOpen,
        projectIDTasks,
        setProjectIDTasks,
        isAddProjectOpen,
        setIsAddProjectOpen,
        projects,
        setProjects,
        isSheetOpen,
        setIsSheetOpen,
        view,
        setView,
        statusFilter,
        setStatusFilter,
        dateRange,
        setDateRange,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
