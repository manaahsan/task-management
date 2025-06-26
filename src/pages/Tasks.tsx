import { useState, useMemo, useRef, useEffect } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import clsx from "clsx";

// ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";



// components
import { TaskTable } from "@/components/shared/Table";

// model
import UpdateStatus from "@/components/models/UpdateStatus";

// useContext
import { useAppContext } from "@/context/AppContext";

// types
import type { Task } from "@/lib/types";

import GanttChartGoogle from "@/components/chart/GanttChart";


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

  const filteredTasks = useMemo(() => {
    let result = [...tasks];

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
        </div>
      </div>
      <div className="flex flex-col w-full gap-6 max-w-sm md:max-w-full">
        <Tabs defaultValue="list" onValueChange={setView}>
          <div
            className={clsx(
              "flex flex-col justify-between w-full space-y-4 md:flex-row md:space-y-0",
              { "justify-end": view === "gantt" }
            )}
          >
            {view === "list" && (
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
            )}

            <TabsList>
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="gantt">Gantt View</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="list">
            <div className="overflow-auto rounded-lg border bg-white dark:bg-neutral-900">
              <TaskTable tasks={filteredTasks} onTaskClick={handleTaskClick} />
              <UpdateStatus />
            </div>
          </TabsContent>
          <TabsContent value="gantt">
            <GanttChartGoogle />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
