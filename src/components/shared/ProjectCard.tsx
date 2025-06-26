import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// ui
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// helper
import { statusColorMap } from "@/lib/helper";

// types
import type { SubTask } from "@/lib/types";

type Props = {
  project: SubTask;
};

export default function ProjectCard({ project }: Props) {
  const navigate = useNavigate();
  return (
    <>
      <Card
        key={project.id}
        className="hover:shadow-lg transition cursor-pointer flex flex-col justify-between"
        onClick={() => navigate(`/project/${project.id}`)}
      >
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <Badge className={statusColorMap[project.status]}>
              {project.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground space-y-1 flex justify-between">
          <div className="">
            <p>
              <span className="font-medium text-foreground">Start:</span>{" "}
              {project.startDate}
            </p>
            <p>
              <span className="font-medium text-foreground">End:</span>{" "}
              {project.endDate}
            </p>
          </div>
          <div className="flex items-end gap-1 text-primary group animate-bounce ">
            <span className="font-medium">Tasks</span>
            <ArrowRight className="w-4 h-4 transition-transform transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
