const API_URL = "http://localhost:3000/projects";

// Get all projects
export async function getProjects() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  return response.json();
}

// Get one project
export async function getProject(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Project not found");
  }

  return response.json();
}

// Add a new project
export async function addProject(project) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(project),
  });

  if (!response.ok) {
    throw new Error("Failed to add project");
  }

  return response.json();
}
