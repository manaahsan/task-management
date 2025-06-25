export interface Task {
  id: string;
  title: string;
  projectId?:string;
  status: string;
  assignedTo: string;
  dueDate: string;
  startTime: string;
  endTime: string;
  dependencies?: string[];
  progress?: number;    
}

export interface Project {
  id: string;
  name: string;
  status: string;
  tasks: Task[];
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
  tasks:Task[];
  setTasks: (task: Task[]) => void;
  isProjectDetailsOpen: boolean;
  setIsProjectDetailsOpen: (open:boolean) => void;
  projectIDTasks: Task[];
  setProjectIDTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  isAddProjectOpen:boolean;
  setIsAddProjectOpen: (open:boolean) => void
}
