import { Chart } from "react-google-charts";

// helper
import { GanttOptions, Ganttdata } from "@/lib/helper";

export default function GanttChartGoogle() {
  return (
    <Chart
      chartType="Gantt"
      width="100%"
      height="400px"
      data={Ganttdata}
      options={GanttOptions}
    />
  );
}
