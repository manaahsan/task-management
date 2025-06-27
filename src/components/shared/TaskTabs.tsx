import clsx from "clsx";
// ui
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
// components
import DateRangePicker from "@/components/shared/DateRangePicker";
import StatusFilterSelect from "@/components/shared/StatusFilterSelect";

type Props = {
  view: string;
};

export default function TaskTabs({ view }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between w-full space-y-4 md:flex-row md:space-y-0",
        { "justify-end": view === "gantt" }
      )}
    >
      {view === "list" && (
        <div className="flex items-center gap-4 flex-wrap">
          <StatusFilterSelect />
          <DateRangePicker />
        </div>
      )}
      <TabsList>
        <TabsTrigger value="list">List View</TabsTrigger>
        <TabsTrigger value="gantt">Gantt View</TabsTrigger>
      </TabsList>
    </div>
  );
}
