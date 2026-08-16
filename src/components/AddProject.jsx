import { useState } from "react";

function AddProject({ onAddProject }) {
  // Store the title entered by the user
  const [title, setTitle] = useState("");

  // Store the description entered by the user
  const [description, setDescription] = useState("");

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    // Prevent empty projects
    if (!title.trim() || !description.trim()) {
      return;
    }

    // Create a new project object
    const newProject = {
      id: Date.now().toString(),
      title: title.trim(),
      description: description.trim(),
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      technologies: [],
    };

    // Send the project to the parent
    onAddProject(newProject);

    // Clear the inputs
    setTitle("");
    setDescription("");
  }

  return (
    <section className="add-project">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>

        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder=""
        />

        <label htmlFor="description">Description</label>

        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default AddProject;
