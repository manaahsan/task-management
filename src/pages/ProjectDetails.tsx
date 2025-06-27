import { useEffect } from "react";
import { useParams } from "react-router-dom";

// ui
import { Button } from "@/components/ui/button";

// useContext
import { useAppContext } from "@/context/AppContext";

// components
import UpdateProject from "@/components/models/UpdateProject";
import AddProject from "@/components/models/AddProject";
import { TaskCard } from "@/components/shared/TaskCard";

// helper
import { project_tasks } from "@/lib/helper";

// types
import type { Task } from "@/lib/types";

export default function ProjectDetails() {
  const { id: projectId } = useParams();
  const { projectIDTasks, setProjectIDTasks, setIsAddProjectOpen } =
    useAppContext();
  
  useEffect(() => {
    const initialTasks = project_tasks?.filter(
      (task: Task) => task.projectId === projectId
    );
    setProjectIDTasks(initialTasks);
  }, [projectId]);

  return (
    <div className="p-4">
      <div className="flex flex-col justify-between md:flex-row">
        <h2 className="text-2xl font-semibold mb-6">
          Tasks for Project: {projectId}
        </h2>
        <Button className="mb-4 md:mb-0" onClick={() => setIsAddProjectOpen(true)}>+ Add Project</Button>
      </div>

      {projectIDTasks?.length === 0 ? (
        <p>No tasks found for this project.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {projectIDTasks?.map((task) => (
            <TaskCard task={task} edit={true} />
          ))}
        </div>
      )}
      <UpdateProject />
      <AddProject />
    </div>
  );
}
