import type { Task } from "@/lib/types";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Install Panel",
    status: "in-progress",
    assignedTo: "Technician A",
    dueDate: "2025-06-25",
    startTime: "09:00",
    endTime: "11:00",
    dependencies: [],
    progress: 40,
  },
  {
    id: "2",
    title: "Check Wiring",
    status: "todo",
    assignedTo: "Technician B",
    dueDate: "2025-06-26",
    startTime: "10:00",
    endTime: "12:00",
    dependencies: ["1"],
    progress: 0,
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
];