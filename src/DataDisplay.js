import React, { useState, useEffect } from 'react';

function DataDisplay() {
  // Assume data is fetched from the smart contract
  const [projectData, setProjectData] = useState([]);

  // Fetch project data on component mount
  useEffect(() => {
    // Fetch data from smart contract using Web3.js or ethers.js
    // Update projectData state
  }, []);

  return (
    <div>
      <h1>Data Display</h1>
      <ul>
        {projectData.map((project) => (
          <li key={project.projectID}>
            {project.projectID} - {project.projectName} - {project.projectArea} - Allocated Budget: {project.allocatedBudget}
          </li>
        ))}
      </ul>
      <div>
        <button className="">All Project</button>
        <button className="">City Corporation</button>
        <button>All Project Details</button>
        <button>Projects</button>
        <button>Treasury</button>
      </div>
    </div>
  );
}

export default DataDisplay;
