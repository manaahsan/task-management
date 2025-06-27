import type { SubTask, Task } from "@/lib/types";
import { FolderKanban, ListTodo, KanbanSquare } from "lucide-react";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Green Valley Mall",
    status: "in-progress",
    assignedTo: "Technician A",
    dueDate: "2025-06-25",
    startTime: "09:00",
    endTime: "11:00",
    dependencies: [],
    progress: 40,
    startDate: "2025-06-01",
    endDate: "2025-06-30",
    tasks: [
      { id: "1", title: "Install power sockets", status: "todo" },
      { id: "1", title: "Mount switchboard", status: "todo" },
    ],
  },
  {
    id: "2",
    title: "TechCorp Office",
    status: "todo",
    assignedTo: "Technician B",
    dueDate: "2025-06-26",
    startTime: "10:00",
    endTime: "12:00",
    dependencies: ["1"],
    progress: 0,
    startDate: "2025-07-05",
    endDate: "2025-07-20",
    tasks: [{ id: "2", title: "Cable wiring", status: "inProgress" }],
  },
];

export const project_tasks = [
  {
    id: "t1",
    projectId: "project-001",
    title: "Install power sockets",
    status: "in-progress",
    assignedTo: "Technician A",
    dueDate: "2025-06-25",
    startTime: "09:00",
    endTime: "11:00",
  },
  {
    id: "t2",
    projectId: "project-001",
    title: "Cable routing",
    status: "todo",
    assignedTo: "Technician B",
    dueDate: "2025-06-27",
    startTime: "13:00",
    endTime: "16:00",
  },
  {
    id: "t3",
    projectId: "project-001",
    title: "Final inspection",
    status: "done",
    assignedTo: "Technician C",
    dueDate: "2025-06-30",
    startTime: "10:00",
    endTime: "12:00",
  },
  {
    id: "t4",
    projectId: "project-002",
    title: "Setup network rack",
    status: "todo",
    assignedTo: "Technician D",
    dueDate: "2025-07-01",
    startTime: "09:00",
    endTime: "11:00",
  },
  {
    id: "t5",
    projectId: "project-002",
    title: "Configure routers and switches",
    status: "in-progress",
    assignedTo: "Technician E",
    dueDate: "2025-07-02",
    startTime: "12:00",
    endTime: "15:00",
  },
  {
    id: "t6",
    projectId: "project-002",
    title: "Test internet connectivity",
    status: "todo",
    assignedTo: "Technician D",
    dueDate: "2025-07-03",
    startTime: "10:00",
    endTime: "12:00",
  },
  {
    id: "t7",
    projectId: "project-003",
    title: "Install CCTV cameras",
    status: "in-progress",
    assignedTo: "Technician F",
    dueDate: "2025-07-04",
    startTime: "08:00",
    endTime: "12:00",
  },
  {
    id: "t8",
    projectId: "project-003",
    title: "Connect DVR system",
    status: "todo",
    assignedTo: "Technician G",
    dueDate: "2025-07-05",
    startTime: "13:00",
    endTime: "15:00",
  },
  {
    id: "t9",
    projectId: "project-003",
    title: "Security system demo",
    status: "todo",
    assignedTo: "Technician H",
    dueDate: "2025-07-06",
    startTime: "11:00",
    endTime: "13:00",
  },
];

export const dummyProjects = [
  {
    id: "project-001",
    title: "Green Valley Mall",
    status: "In Progress",
    startDate: "2025-06-01",
    endDate: "2025-06-30",
    tasks: [{ id: "3", title: "Cable wiring", status: "in-Progress" }],
  },
  {
    id: "project-002",
    title: "TechCorp Office",
    status: "todo",
    startDate: "2025-07-05",
    endDate: "2025-07-20",
    tasks: [
      { id: "1", title: "Install power sockets", status: "todo" },
      { id: "2", title: "Mount switchboard", status: "todo" },
    ],
  },
  {
    id: "project-003",
    title: "Hospital Maintanence",
    status: "done",
    startDate: "2025-05-01",
    endDate: "2025-05-10",
    tasks: [{ id: "4", title: "Site inspection", status: "Completed" }],
  },
];

export const navItems = [
  // { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "Tasks", path: "/tasks", icon: ListTodo },
  { name: "Kanban", path: "/kanban-board", icon: KanbanSquare },
];

interface Column {
  name: string;
  tasks: SubTask[];
}

export const initialColumns: Record<string, Column> = {
  todo: {
    name: "To Do",
    tasks: [
      {
        id: "1",
        title: "Install power sockets",
        status: "todo",
        assignedTo: "Technician A",
        dueDate: "2025-06-25",
        startTime: "09:00",
        endTime: "11:00",
      },
      {
        id: "2",
        title: "Mount switchboard",
        status: "todo",
        assignedTo: "Technician B",
        dueDate: "2025-06-26",
        startTime: "11:00",
        endTime: "12:30",
      },
    ],
  },
  "in-progress": {
    name: "In Progress",

    tasks: [
      {
        id: "3",
        title: "Cable wiring",
        status: "in-progress",
        assignedTo: "Technician B",
        dueDate: "2025-06-26",
        startTime: "10:00",
        endTime: "12:00",
      },
    ],
  },
  done: {
    name: "Done",
    tasks: [
      {
        id: "4",
        title: "Site inspection",
        status: "done",
        assignedTo: "Technician D",
        dueDate: "2025-06-24",
        startTime: "08:00",
        endTime: "09:30",
      },
    ],
  },
};

const oneDay = 24 * 60 * 60 * 1000;
export const Ganttdata = [
  [
    "Task ID",
    "Task Name",
    "Start Date",
    "End Date",
    "Duration",
    "Percent Complete",
    "Dependencies",
  ],
  [
    "1",
    "Install sockets",
    new Date(2025, 5, 25),
    new Date(2025, 5, 27),
    3 * oneDay,
    40,
    null,
  ],
  [
    "2",
    "Wiring",
    new Date(2025, 5, 28),
    new Date(2025, 5, 30),
    3 * oneDay,
    0,
    "1",
  ],
  [
    "3",
    "Mount switchboard",
    new Date(2025, 5, 30),
    new Date(2025, 5, 31),
    1 * oneDay,
    0,
    "2",
  ],
  [
    "4",
    "Connect lighting",
    new Date(2025, 6, 1),
    new Date(2025, 6, 4),
    1 * oneDay,
    20,
    "3",
  ],
  [
    "5",
    "Install fans",
    new Date(2025, 6, 4),
    new Date(2025, 6, 6),
    2 * oneDay,
    10,
    "3",
  ],
  [
    "6",
    "Test circuits",
    new Date(2025, 6, 6),
    new Date(2025, 6, 7),
    2 * oneDay,
    0,
    "4,5",
  ],
  [
    "7",
    "Final inspection",
    new Date(2025, 6, 7),
    new Date(2025, 6, 8),
    3 * oneDay,
    0,
    "6",
  ],
  [
    "8",
    "Project handover",
    new Date(2025, 6, 8),
    new Date(2025, 6, 9),
    3 * oneDay,
    0,
    "7",
  ],
];

export const GanttOptions = {
  height: 400,
  gantt: {
    trackHeight: 30,
  },
};

export const statusColorMap: Record<string, string> = {
  todo: " capitalize bg-yellow-100 text-yellow-800",
  "in-progress": " capitalize bg-blue-100 text-blue-800",
  done: " capitalize bg-green-100 text-green-800",
};
