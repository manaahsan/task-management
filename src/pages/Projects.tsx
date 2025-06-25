import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const dummyProjects = [
  {
    id: "project-001",
    name: "Building Electrical Upgrade",
    status: "In Progress",
    startDate: "2025-06-01",
    endDate: "2025-06-30",
  },
  {
    id: "project-002",
    name: "Cooling System Installation",
    status: "Pending",
    startDate: "2025-07-05",
    endDate: "2025-07-20",
  },
  {
    id: "project-003",
    name: "Generator Maintenance",
    status: "Completed",
    startDate: "2025-05-01",
    endDate: "2025-05-10",
  },
];

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Assigned Projects</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dummyProjects.map((project) => (
          <Card
            key={project.id}
            className="hover:shadow-lg transition cursor-pointer"
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">{project.name}</CardTitle>
                <Badge variant="outline">{project.status}</Badge>
              </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-1">
              <p>
                <span className="font-medium text-gray-700">Start:</span>{" "}
                {project.startDate}
              </p>
              <p>
                <span className="font-medium text-gray-700">End:</span>{" "}
                {project.endDate}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
