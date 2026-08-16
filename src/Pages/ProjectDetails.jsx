import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getProject } from "../Services/projectApi";

function ProjectDetails() {
  // Get project ID from the URL
  const { id } = useParams();

  // Store the project
  const [project, setProject] = useState(null);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // Fetch the project
  useEffect(() => {
    async function loadProject() {
      try {
        const data = await getProject(id);

        setProject(data);
      } catch (error) {
        setError("Project could not be found.");
      } finally {
        setLoading(false);
      }
    }

    loadProject();
  }, [id]);

  // Loading message
  if (loading) {
    return <p className="status">Loading project...</p>;
  }

  // Error message
  if (error) {
    return (
      <main className="details-page">
        <p className="error">{error}</p>

        <Link to="/" className="back-button">
          ← Back to Projects
        </Link>
      </main>
    );
  }

  return (
    <main className="details-page">
      <Link to="/" className="back-button">
        ← Back to Projects
      </Link>

      <img src={project.image} alt={project.title} className="details-image" />

      <h1>{project.title}</h1>

      <p className="details-description">{project.description}</p>

      {project.technologies && project.technologies.length > 0 && (
        <>
          <h2>Technologies</h2>

          <div className="technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </>
      )}
    </main>
  );
}

export default ProjectDetails;
