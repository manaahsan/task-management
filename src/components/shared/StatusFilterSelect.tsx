// ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// useContext
import { useAppContext } from "@/context/AppContext";

export default function StatusFilterSelect() {
  const { statusFilter, setStatusFilter } = useAppContext();

  return (
    <Select value={statusFilter} onValueChange={setStatusFilter}>
      <SelectTrigger className="w-full md:w-[150px]">
        <SelectValue placeholder="Filter by status" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All</SelectItem>
        <SelectItem value="todo">To Do</SelectItem>
        <SelectItem value="in-progress">In Progress</SelectItem>
        <SelectItem value="done">Done</SelectItem>
      </SelectContent>
    </Select>
  );
}
