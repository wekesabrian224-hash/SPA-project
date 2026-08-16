import { useEffect, useState } from "react";

import Header from "../components/Header";
import AddProject from "../components/AddProject";
import ProjectList from "../components/ProjectList";

import { getProjects, addProject } from "../Services/projectApi";

function Home() {
  // Store all projects
  const [projects, setProjects] = useState([]);

  // Store search value
  const [search, setSearch] = useState("");

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // Fetch projects when the page loads
  useEffect(() => {
    async function loadProjects() {
      try {
        setLoading(true);

        const data = await getProjects();

        setProjects(data);

        setError("");
      } catch (error) {
        setError("Unable to load projects.");
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // Add a new project
  async function handleAddProject(project) {
    try {
      const savedProject = await addProject(project);

      setProjects((currentProjects) => [...currentProjects, savedProject]);
    } catch (error) {
      setError("Unable to add project.");
    }
  }

  return (
    <>
      <Header />

      <main>
        <AddProject onAddProject={handleAddProject} />

        {loading && <p className="status">Loading projects...</p>}

        {error && <p className="error status">{error}</p>}

        {!loading && (
          <ProjectList
            projects={projects}
            search={search}
            setSearch={setSearch}
          />
        )}
      </main>
    </>
  );
}

export default Home;
