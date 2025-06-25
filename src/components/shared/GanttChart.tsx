import React from "react";
import type { Task } from "@/lib/types";

interface GanttChartViewProps {
  tasks: Task[];
}

const GanttChartView: React.FC<GanttChartViewProps> = ({ tasks }) => {
  // Calculate min/max date for timeline scale
  const dates = tasks.flatMap(t => [new Date(t.dueDate)]);
  const minDate = new Date(Math.min(...dates.map(d => d.getTime())));
  const maxDate = new Date(Math.max(...dates.map(d => d.getTime())));

  const getLeftPercent = (dateStr: string) => {
    const date = new Date(dateStr);
    const totalRange = maxDate.getTime() - minDate.getTime();
    const offset = date.getTime() - minDate.getTime();
    return (offset / totalRange) * 100;
  };

  // Get task index for vertical positioning
  const taskIndex = (id: string) => tasks.findIndex(t => t.id === id);

  return (
    <div className="relative border p-4 overflow-x-auto bg-white dark:bg-neutral-900 rounded-lg" style={{ minHeight: tasks.length * 40 }}>
      {/* Task bars */}
      {tasks.map((task) => {
        const left = getLeftPercent(task.dueDate);
        return (
          <div
            key={task.id}
            className="absolute h-8 rounded text-white text-sm flex items-center px-2"
            style={{
              left: `${left}%`,
              width: "10%", 
              top: `${taskIndex(task.id) * 40}px`,
              backgroundColor: "#3b82f6",
            }}
            title={`${task.title} (${task.startTime} - ${task.endTime})`}
          >
            {/* Progress bar */}
            <div
              className="h-full bg-green-400 rounded-l"
              style={{ width: `${task.progress ?? 0}%` }}
            />
            <span className="absolute left-2 z-10">{task.title}</span>
          </div>
        );
      })}

      {/* Dependency lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ minHeight: tasks.length * 40 }}
      >
        {tasks.map((task) => {
          if (!task.dependencies?.length) return null;

          return task.dependencies.map(depId => {
            const fromIndex = taskIndex(depId);
            const toIndex = taskIndex(task.id);
            if (fromIndex === -1 || toIndex === -1) return null;

            const fromLeft = getLeftPercent(tasks[fromIndex].dueDate) + 10; // right edge of dependency task bar
            const fromTop = fromIndex * 40 + 20; // middle of the task bar

            const toLeft = getLeftPercent(task.dueDate); // left edge of current task bar
            const toTop = toIndex * 40 + 20;

            return (
              <line
                key={`${depId}-${task.id}`}
                x1={`${fromLeft}%`}
                y1={fromTop}
                x2={`${toLeft}%`}
                y2={toTop}
                stroke="#f87171" // red-400
                strokeWidth={2}
                markerEnd="url(#arrowhead)"
              />
            );
          });
        })}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="10"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#f87171" />
          </marker>
        </defs>
      </svg>
    </div>
  );
};

export default GanttChartView;
