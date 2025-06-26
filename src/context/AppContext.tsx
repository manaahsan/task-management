import { createContext, useContext, useState } from "react";

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
  const [isSheetOpen, setIsSheetOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [projectIDTasks, setProjectIDTasks] = useState<Task[]>(project_tasks);
  const [tasks, setTasks] = useState(mockTasks);

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
