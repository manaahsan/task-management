
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface Task {
  id: string;
  title: string;
  status: string;
  assignedTo: string;
  dueDate: string;
  startTime: string;
  endTime: string;
}

interface TaskTableProps {
  tasks: Task[];
  onTaskClick?: (task: Task) => void;
}

export function TaskTable({ tasks, onTaskClick }: TaskTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Technician</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead>Time</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TableRow
              key={task.id}
              onClick={() => onTaskClick && onTaskClick(task)}
              className={onTaskClick ? "cursor-pointer hover:bg-gray-100 dark:hover:bg-neutral-800" : ""}
            >
              <TableCell>{task.title}</TableCell>
              <TableCell className="capitalize">{task.status}</TableCell>
              <TableCell>{task.assignedTo}</TableCell>
              <TableCell>{task.dueDate}</TableCell>
              <TableCell>
                {task.startTime} - {task.endTime}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-4">
              No tasks for the selected filters.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
