// "use client";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable, type DropResult } from "@hello-pangea/dnd";

// components
import { TaskCard } from "@/components/shared/TaskCard";

// helper
import { initialColumns } from "@/lib/helper";

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);
  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceTasks = [...sourceColumn.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    movedTask.status = destination.droppableId;

    if (source.droppableId === destination.droppableId) {
      sourceTasks.splice(destination.index, 0, movedTask);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceTasks,
        },
      });
    } else {
      const destTasks = [...destColumn.tasks];
      destTasks.splice(destination.index, 0, movedTask);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          tasks: sourceTasks,
        },
        [destination.droppableId]: {
          ...destColumn,
          tasks: destTasks,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {Object.entries(columns).map(([columnId, column]) => (
          <div key={columnId} className="bg-muted p-4 rounded shadow-md">
            <h2 className={"text-xl font-semibold mb-4"}>{column.name}</h2>
            <Droppable droppableId={columnId}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="min-h-[100px] space-y-4"
                >
                  {column.tasks.map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <TaskCard task={task} edit={false} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </div>
    </DragDropContext>
  );
}
