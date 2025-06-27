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

const UpdateProject = () => {
  const {
    selectedTask,
    setSelectedTask,
    isProjectDetailsOpen,
    setIsProjectDetailsOpen,
    setProjectIDTasks,
  } = useAppContext();

  return (
    <Dialog open={isProjectDetailsOpen} onOpenChange={setIsProjectDetailsOpen}>
      <DialogContent className="max-w-[90%] md:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Project Details</DialogTitle>
        </DialogHeader>
        {selectedTask && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setProjectIDTasks((prev) =>
                prev.map((task) =>
                  task.id === selectedTask.id ? selectedTask : task
                )
              );
              setSelectedTask(null);
              setIsProjectDetailsOpen(false);
            }}
            className="space-y-4"
          >
            {/* Subject */}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Task Title
              </label>
              <Input
                value={selectedTask.title}
                onChange={(e) =>
                  setSelectedTask((prev) =>
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
                value={selectedTask.dueDate}
                onChange={(e) =>
                  setSelectedTask((prev) =>
                    prev ? { ...prev, dueDate: e.target.value } : prev
                  )
                }
                required
              />
            </div>

            {/* Status */}
            <div>
              <label className="block mb-1 text-sm font-medium">Status</label>
              <Select
                value={selectedTask.status}
                onValueChange={(value) =>
                  setSelectedTask((prev) =>
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
              <Button type="submit">Save Changes</Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsProjectDetailsOpen(false)}
              >
                Cancel
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default UpdateProject;
