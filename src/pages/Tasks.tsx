import { useState, useMemo, useRef, useEffect } from "react";
import { AppWindowIcon, CodeIcon } from "lucide-react";

// ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { TaskTable } from "@/components/shared/Table";
import UpdateStatus from "@/components/models/UpdateStatus";

// helper
import { mockTasks } from "@/lib/helper";

// types
import type { Task } from "@/lib/types";
import { useAppContext } from "@/context/AppContext";
import GanttChartView from "@/components/shared/GanttChart";

export default function Tasks() {
  const { setStatusUpdateIsOpen, setSelectedTask, tasks } = useAppContext();
  const [view, setView] = useState("list");
  const [statusFilter, setStatusFilter] = useState("all");
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date("2025-06-24"),
      endDate: new Date("2025-06-27"),
      key: "selection",
    },
  ]);

  const [openCalendar, setOpenCalendar] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Close calendar on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setOpenCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  //   const filteredTasks = useMemo(() => {
  //     let tasks = [...tasks];

  //     if (statusFilter !== "all") {
  //       tasks = tasks.filter((task) => task.status === statusFilter);
  //     }

  //     const start = format(dateRange[0].startDate, "yyyy-MM-dd");
  //     const end = format(dateRange[0].endDate, "yyyy-MM-dd");

  //     tasks = tasks.filter(
  //       (task) => task.dueDate >= start && task.dueDate <= end
  //     );

  //     return tasks;
  //   }, [statusFilter, dateRange]);
  const filteredTasks = useMemo(() => {
    let result = [...tasks]; // ✅ use outer 'tasks'

    if (statusFilter !== "all") {
      result = result.filter((task) => task.status === statusFilter);
    }

    const start = format(dateRange[0].startDate, "yyyy-MM-dd");
    const end = format(dateRange[0].endDate, "yyyy-MM-dd");

    result = result.filter(
      (task) => task.dueDate >= start && task.dueDate <= end
    );

    return result;
  }, [tasks, statusFilter, dateRange]);

  const formattedRange = `${format(
    dateRange[0].startDate,
    "yyyy-MM-dd"
  )} to ${format(dateRange[0].endDate, "yyyy-MM-dd")}`;
  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
    setStatusUpdateIsOpen(true);
  };

  return (
    <div className="p-4">
      <div className="flex items-start justify-between mb-4 flex-wrap gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-2">Task Filters</h2>
          <div className="flex items-center gap-4 flex-wrap">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="todo">To Do</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="done">Done</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative" ref={calendarRef}>
              <button
                onClick={() => setOpenCalendar(!openCalendar)}
                className="border px-3 py-2 rounded-md text-sm dark:bg-neutral-900 dark:text-white"
              >
                {formattedRange}
              </button>

              {openCalendar && (
                <div className="absolute z-20 mt-2">
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item: any) => {
                      setDateRange([item.selection]);
                      setOpenCalendar(false);
                    }}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                  />
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="list">
          <div className="flex justify-between">
            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="password">Gantt View</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="list"></TabsContent>
          <TabsContent value="gantt">
            <GanttChartView tasks={filteredTasks} />
          </TabsContent>
        </Tabs>
      </div>
      {view == "list" ? (
        <div className="overflow-auto rounded-lg border bg-white dark:bg-neutral-900">
          <TaskTable tasks={filteredTasks} onTaskClick={handleTaskClick} />
          <UpdateStatus />
        </div>
      ) : (
        <GanttChartView tasks={filteredTasks} />
      )}
    </div>
  );
}
