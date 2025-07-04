import { useState } from "react";
import { useParams } from "react-router-dom";

// ui
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// useContext
import { useAppContext } from "@/context/AppContext";
import type { Task } from "@/lib/types";

const AddProject = () => {
  const {
    setSelectedTask,
    isAddProjectOpen,
    setIsAddProjectOpen,
    setProjectIDTasks,
  } = useAppContext();
  const { id } = useParams();
  const [addProject, setAddProject] = useState<Task>({
    id: "",
    projectId: id || "",
    title: "",
    status: "",
    assignedTo: "",
    dueDate: "",
    startTime: "",
    endTime: "",
  });
  return (
    <Dialog open={isAddProjectOpen} onOpenChange={setIsAddProjectOpen}>
      <DialogContent className=" max-w-[90%] h-96 overflow-auto md:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Project</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const newTask: Task = {
              ...addProject,
              id: crypto.randomUUID(),
              projectId: id || "",
            };

            setProjectIDTasks((prev) => [...prev, newTask]);
            setSelectedTask(null);
            setIsAddProjectOpen(false);
          }}
          className="space-y-4"
        >
          {/* Subject */}
          <div>
            <label className="block mb-1 text-sm font-medium">Task Title</label>
            <Input
              value={addProject.title}
              onChange={(e) =>
                setAddProject((prev) =>
                  prev ? { ...prev, title: e.target.value } : prev
                )
              }
              required
            />
          </div>

          {/* Due Date */}
          <div>
            <label className="block mb-1 text-sm font-medium">Due Date</label>
            <Input
              type="date"
              value={addProject.dueDate}
              onChange={(e) =>
                setAddProject((prev) =>
                  prev ? { ...prev, dueDate: e.target.value } : prev
                )
              }
              className="block"
              required
            />
          </div>
          {/* assigned to */}
          <div>
            <label className="block mb-1 text-sm font-medium">Technician</label>
            <Select
              value={addProject.assignedTo}
              onValueChange={(value) =>
                setAddProject({ ...addProject, assignedTo: value })
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Technician" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Technician A">Technician A</SelectItem>
                <SelectItem value="Technician B">Technician B</SelectItem>
                <SelectItem value="Technician C">Technician C</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Start Time</label>
            <Input
              type="time"
              value={addProject.startTime}
              onChange={(e) =>
                setAddProject({ ...addProject, startTime: e.target.value })
              }
              className="block"
              required
            />
          </div>

          {/* End Time */}
          <div>
            <label className="block mb-1 text-sm font-medium">End Time</label>
            <Input
              type="time"
              value={addProject.endTime}
              onChange={(e) =>
                setAddProject({ ...addProject, endTime: e.target.value })
              }
              className="block"
              required
            />
          </div>
          {/* Status */}
          <div>
            <label className="block mb-1 text-sm font-medium">Status</label>
            <Select
              value={addProject.status}
              onValueChange={(value) =>
                setAddProject((prev) =>
                  prev ? { ...prev, status: value } : prev
                )
              }
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <DialogFooter className="pt-4">
            <Button type="submit">Add Project</Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAddProjectOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;
