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
    <nav className="m-8">
      <h1 className="text-4xl text-blue-800 font-bold m-4 ml-28">Dashboard</h1>
      <div className="ml-8 ">
        {/* <ul>
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
        </ul> */}
        <ul className="flex items-center p-4 max-w-7xl my-4 mx-auto shadow-md rounded-xl h-20 bg-slate-100 space-x-28">
          {/* <h1 className="text-4xl text-blue-700 m-4">Dashboard</h1> */}
          <li className="ml-6"><Link to="/">Home</Link></li>
          <li><Link to="/project-creation">Project Creation</Link></li>
          {/* project management */}
          <li><Link to="/project-management">City Corporation</Link></li>
          <li><Link to="/installment-transfer">Installment Transfer</Link></li>
          <li><Link to="/funds-transfer">Funds Transfer</Link></li>
          <li><Link to="/data-display">Data Display</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Dashboard;
