import SearchBar from "./SearchBar";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects, search, setSearch }) {
  // Filter projects according to the search text
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <section className="project-list">
      <SearchBar search={search} setSearch={setSearch} />

      <div className="projects">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="no-projects">No projects found.</p>
        )}
      </div>
    </section>
  );
}

export default ProjectList;
