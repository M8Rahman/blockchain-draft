// import React, { useState, useEffect } from 'react';

// function Dashboard() {
//   // Assume projectsData is fetched from the smart contract
//   const [projectsData, setProjectsData] = useState([]);

//   // Fetch project data on component mount
//   useEffect(() => {
//     // Fetch data from smart contract using Web3.js or ethers.js
//     // Update projectsData state
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>
//       <ul>
//         {projectsData.map((project) => (
//           <li key={project.projectID}>
//             {project.projectID} - {project.projectName} - {project.projectArea}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Dashboard;

import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <nav>
      <h1>Dashboard</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project-creation">Project Creation</Link>
        </li>
        <li>
          <Link to="/project-management">Project Management</Link>
        </li>
        <li>
          <Link to="/installment-transfer">Installment Transfer</Link>
        </li>
        <li>
          <Link to="/funds-transfer">Funds Transfer</Link>
        </li>
        <li>
          <Link to="/data-display">Data Display</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Dashboard;
