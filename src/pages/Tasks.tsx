"use client";
import { Tabs } from "@/components/ui/tabs";
import TaskTabs from "@/components/shared/TaskTabs";
import TaskListView from "@/components/shared/TaskListView";

import { useAppContext } from "@/context/AppContext";
import TaskGanttView from "@/components/chart/TaskGanttView";

export default function Tasks() {
const {view, setView} = useAppContext()

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Task Filters</h2>
      <Tabs defaultValue="list" onValueChange={setView}>
        <TaskTabs view={view} />
        {view === "list" && <TaskListView />}
        {view === "gantt" && <TaskGanttView />}
      </Tabs>
    </div>
  );
}
