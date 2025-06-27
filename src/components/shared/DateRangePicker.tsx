
import { useState, useRef, useEffect } from "react";
import { DateRange, type RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

// useAppContext
import { useAppContext } from "@/context/AppContext";

export default function DateRangePicker() {
  const { dateRange, setDateRange } = useAppContext();

  const [openCalendar, setOpenCalendar] = useState(false);
  const [hasStartChanged, setHasStartChanged] = useState(false);
  const [hasEndChanged, setHasEndChanged] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const formattedRange = `${
    dateRange[0].startDate ? format(dateRange[0].startDate, "yyyy-MM-dd") : ""
  } to ${
    dateRange[0].endDate ? format(dateRange[0].endDate, "yyyy-MM-dd") : ""
  }`;

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setOpenCalendar(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full md:w-auto" ref={calendarRef}>
      <button
        onClick={() => setOpenCalendar(!openCalendar)}
        className="border px-3 py-2 rounded-md text-base w-full md:text:sm md:w-fit dark:bg-neutral-900 dark:text-white"
      >
        {formattedRange}
      </button>
      {openCalendar && (
        <div className="absolute z-20 mt-2">
          <DateRange
            editableDateInputs
            onChange={(item: RangeKeyDict) => {
              const { startDate, endDate } = item.selection;
              if (startDate && startDate !== dateRange[0].startDate) setHasStartChanged(true);
              if (endDate && endDate !== dateRange[0].endDate) setHasEndChanged(true);
              setDateRange([item.selection]);
              if (hasStartChanged && hasEndChanged) {
                setOpenCalendar(false);
                setHasStartChanged(false);
                setHasEndChanged(false);
              }
            }}
            moveRangeOnFirstSelection={false}
            ranges={dateRange}
          />
        </div>
      )}
    </div>
  );
}
