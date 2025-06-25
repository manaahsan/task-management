import { useState } from "react";

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

// useContext
import { useAppContext } from "@/context/AppContext";

const UpdateStatus = () => {
  const {
    statusUpdateIsOpen,
    setStatusUpdateIsOpen,
    selectedTask,
    setSelectedTask,
    tasks,
    setTasks,
  } = useAppContext();
  const [status, setStatus] = useState<String>("");
  const submitHandler = () => {
    if (!selectedTask) return;
    const updatedTask: any = { ...selectedTask, status: status };

    const updatedTasks = tasks.map((t) =>
      t.id === updatedTask.id ? updatedTask : t
    );

    setTasks(updatedTasks);
    setSelectedTask(updatedTask);

    setSelectedTask(null);
    setStatusUpdateIsOpen(false);
  };
  return (
    <Dialog open={statusUpdateIsOpen} onOpenChange={setStatusUpdateIsOpen}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Task Details</DialogTitle>
        </DialogHeader>

        {selectedTask && (
          <>
            <div className="space-y-2">
              <p>
                <strong>Title:</strong> {selectedTask.title}
              </p>
              <p>
                <strong>Technician:</strong> {selectedTask.assignedTo}
              </p>
              <p>
                <strong>Date:</strong> {selectedTask.dueDate}
              </p>
              <p>
                <strong>Time:</strong> {selectedTask.startTime} -{" "}
                {selectedTask.endTime}
              </p>
            </div>

            <div className="mt-4">
              <label className="block mb-1 font-medium">Update Status</label>
              <Select
                value={selectedTask.status}
                onValueChange={(newStatus) => {
                  setStatus(newStatus);
                  setSelectedTask({ ...selectedTask, status: newStatus });
                }}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Update status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => submitHandler()}>
                Close
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UpdateStatus;
