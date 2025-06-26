import GanttChartGoogle from "@/components/chart/GanttChart";
import KanbanBoard from "@/components/shared/KanbanBoard";
export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Project Kanban Board</h1>
      <KanbanBoard />
      <GanttChartGoogle/>
    </div>
  );
}
