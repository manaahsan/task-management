import type { Range } from "react-date-range";

export interface Task {
  id: string;
  title: string;
  projectId?: string;
  status: string;
  assignedTo: string;
  dueDate: string;
  startTime: string;
  endTime: string;
  startDate?: string,
  endDate?: string,
  dependencies?: string[];
  progress?: number;
  tasks?: SubTask[];
  
}
export interface SubTask {
  id: string;
  title: string;
  status: string;
  startDate?: string;
  endDate?: string;
  assignedTo?:string;
  dueDate?:string;
  startTime?:string;
  endTime?:string;
}

export interface Column {
  name: string;
  tasks: SubTask[];
}

export interface Project {
  id: string;
  title: string;
  status: string;
  tasks?: SubTask[];
  startDate?: string;
  endDate?: string;
}

export interface AppContextType {
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  isTaskModalOpen: boolean;
  setIsTaskModalOpen: (open: boolean) => void;
  statusUpdateIsOpen: boolean;
  setStatusUpdateIsOpen: (open: boolean) => void;
  selectedTask: Task | null;
  // setSelectedTask: (task: Task | null) => void;
  setSelectedTask: React.Dispatch<React.SetStateAction<Task | null>>;
  tasks: Task[];
  setTasks: (task: Task[]) => void;
  isProjectDetailsOpen: boolean;
  setIsProjectDetailsOpen: (open: boolean) => void;
  projectIDTasks: Task[];
  setProjectIDTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  isAddProjectOpen: boolean;
  setIsAddProjectOpen: (open: boolean) => void;
  projects: Project[];
  setProjects: (project: Project[]) => void;
  isSheetOpen: boolean;
  setIsSheetOpen: (isSheetOpen: boolean) => void;
  view: string;
  setView: (view: string) => void;
  statusFilter: string;
  setStatusFilter: (statusFilter: string) => void;
  dateRange: Range[];
  setDateRange: (range: Range[]) => void;
}
