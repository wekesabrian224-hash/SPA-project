import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />

      <div className="project-info">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <Link to={`/projects/${project.id}`} className="view-project">
          View Project
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
