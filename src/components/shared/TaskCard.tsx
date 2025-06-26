import { Pencil } from "lucide-react";

// ui
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// useContext
import { useAppContext } from "@/context/AppContext";

// helper
import { statusColorMap } from "@/lib/helper";

export const TaskCard = ({ task, edit }: any) => {
  console.log(task, 11);
  const { setIsProjectDetailsOpen, setSelectedTask } = useAppContext();

  return (
    <Card key={task.id}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">{task.title}</CardTitle>
          <Badge className={statusColorMap[task.status]}>{task.status}</Badge>
          {edit && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedTask(task);
                setIsProjectDetailsOpen(true);
              }}
              aria-label="Edit task"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Pencil className="h-5 w-5" />
            </button>
          )}
        </div>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground space-y-1">
        <p>
          <span className="text-foreground font-medium">Assigned to:</span>{" "}
          {task.assignedTo}
        </p>
        <p>
          <span className="text-foreground font-medium">Due Date:</span>{" "}
          {task.dueDate}
        </p>
        <p>
          <span className="text-foreground font-medium">Time:</span>{" "}
          {task.startTime} - {task.endTime}
        </p>
      </CardContent>
    </Card>
  );
};
