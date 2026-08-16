import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ProjectDetails from "./Pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Project details page */}
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
