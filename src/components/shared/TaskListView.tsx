import { useMemo } from "react";
import { format } from "date-fns";

//components
import { TaskTable } from "@/components/shared/Table";

// model
import UpdateStatus from "@/components/models/UpdateStatus";

// useContext
import { useAppContext } from "@/context/AppContext";

// types
import type { Task } from "@/lib/types";

export default function TaskListView() {
  const {
    tasks,
    statusFilter,
    dateRange,
    setSelectedTask,
    setStatusUpdateIsOpen,
  } = useAppContext();

  const filteredTasks = useMemo(() => {
    let result = [...tasks];
    if (statusFilter !== "all") {
      result = result.filter((task) => task.status === statusFilter);
    }
    const start = dateRange[0].startDate
      ? format(dateRange[0].startDate, "yyyy-MM-dd")
      : "";
    const end = dateRange[0].endDate
      ? format(dateRange[0].endDate, "yyyy-MM-dd")
      : "";
    return result.filter(
      (task) => task.dueDate >= start && task.dueDate <= end
    );
  }, [tasks, statusFilter, dateRange]);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setStatusUpdateIsOpen(true);
  };

  return (
    <div className="overflow-auto rounded-lg border bg-white dark:bg-neutral-900">
      <TaskTable tasks={filteredTasks} onTaskClick={handleTaskClick} />
      <UpdateStatus />
    </div>
  );
}
