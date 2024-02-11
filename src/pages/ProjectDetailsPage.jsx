import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetailsPage() {
  const { projectId } = useParams();

  return (
    <div>
      <h1>Project Details: {projectId}</h1>
    </div>
  );
}

export default ProjectDetailsPage;
