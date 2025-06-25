import { useEffect } from "react";
import { Pencil } from "lucide-react";
import { useParams } from "react-router-dom";

// ui
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// useContext
import { useAppContext } from "@/context/AppContext";

// components
import UpdateProject from "@/components/models/UpdateProject";
import AddProject from "@/components/models/AddProject";

// types
import type { Task } from "@/lib/types";


const statusColorMap: Record<string, string> = {
  todo: "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
  done: "bg-green-100 text-green-800",
};

export default function ProjectDetails() {
  const { id: projectId } = useParams();
  const {
    setIsProjectDetailsOpen,
    setSelectedTask,
    projectIDTasks,
    setProjectIDTasks,
    setIsAddProjectOpen
  } = useAppContext();
  const initialTasks = projectIDTasks?.filter(
    (task: Task) => task.projectId === projectId
  );
  useEffect(() => {
    setProjectIDTasks(initialTasks);
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold mb-6">
          Tasks for Project: {projectId}
        </h2>
        <Button onClick={()=>setIsAddProjectOpen(true)}>+ Add Project</Button>
      </div>

      {projectIDTasks?.length === 0 ? (
        <p>No tasks found for this project.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projectIDTasks?.map((task) => (
            <Card key={task.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-lg">{task.title}</CardTitle>
                  <Badge className={statusColorMap[task.status]}>
                    {task.status}
                  </Badge>
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
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-1">
                <p>
                  <span className="text-gray-700 font-medium">
                    Assigned to:
                  </span>{" "}
                  {task.assignedTo}
                </p>
                <p>
                  <span className="text-gray-700 font-medium">Due Date:</span>{" "}
                  {task.dueDate}
                </p>
                <p>
                  <span className="text-gray-700 font-medium">Time:</span>{" "}
                  {task.startTime} - {task.endTime}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      <UpdateProject />
      <AddProject/>
    </div>
  );
}
