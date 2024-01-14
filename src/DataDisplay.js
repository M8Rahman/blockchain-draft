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
      <h1 className="text-4xl mb-5 ml-36">Data Display</h1>
      <ul>
        {projectData.map((project) => (
          <li key={project.projectID}>
            {project.projectID} - {project.projectName} - {project.projectArea} - Allocated Budget: {project.allocatedBudget}
          </li>
        ))}
      </ul>
      <div>
        <form className="border-4 border-sky-500  p-4 m-3 w-3/5 ml-44 shadow-lg rounded-lg">
          <button className="text-black mr-6 bg-sky-400 rounded-xl mt-4 h-14 w-[140px]">All Project</button>
          <button className="text-black mr-6 bg-sky-400 rounded-xl mt-4 h-14 w-[140px]">City Corporation</button>
          <button className="text-black mr-6 bg-sky-400 rounded-xl mt-4 h-14 w-[140px]">All Project Details</button>
          <button className="text-black mr-6 bg-sky-400 rounded-xl mt-4 h-14 w-[140px]">Projects</button>
          <button className="text-black mr-6 bg-sky-400 rounded-xl mt-4 h-14 w-[140px]">Treasury</button>
        </form>
      </div>
    </div>
  );
}

export default DataDisplay;
