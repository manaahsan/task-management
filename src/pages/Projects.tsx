// components
import ProjectCard from "@/components/shared/ProjectCard";

// useContext
import { useAppContext } from "@/context/AppContext";


export default function Projects() {
  const { projects } = useAppContext();
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-6">Assigned Projects</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}
