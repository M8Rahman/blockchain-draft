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
import Home from './Home';

function Dashboard() {
  return (
    <nav className="m-8">
      {/* <h1 className="text-4xl text-blue-800 font-bold m-4 ml-28">Dashboard</h1> */}
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
        <ul className="flex items-center p-4 max-w-7xl my-4 mx-auto shadow-2xl  h-20 text-white bg-slate-800">

        <div className='text-4xl font-bold text-gradient-to-r from-indigo-500 mr-52'>GovtChain</div>

        <div className='flex space-x-2 rounded-xl text-white'>
            {/* <h1 className="text-4xl text-blue-700 m-4">Dashboard</h1> */}
            {/* <li className= "pl-1 pr-1 hover:bg-violet-600 hover: text active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-xl"><Link to="/">Home</Link></li> */}{/* <li><Link to="/">Home</Link></li> */}
            {/* <li><Link to={Home}>Home</Link></li> */}
          <li className= "hover:bg-violet-600 font-semibold hover:text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"><Link to='/home'>Home</Link></li>
          <li className= "hover:bg-violet-600 font-semibold hover:text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"><Link to="/project-creation">Project Creation</Link></li>
          {/* project management */}
          <li className= "hover:bg-violet-600 font-semibold hover:text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"><Link to="/city-corporation">City Corporation</Link></li>
          <li className= "hover:bg-violet-600 font-semibold hover:text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"><Link to="/builder">Builder</Link> </li>
          <li className= "hover:bg-violet-600 font-semibold hover:text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"><Link to="/installment-transfer">Installment Transfer</Link></li>
          <li className= "hover:bg-violet-600 font-semibold hover:text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"><Link to="/funds-transfer">Funds Transfer</Link></li>
          <li className= "hover:bg-violet-600 font-semibold hover:text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-lg p-2"><Link to="/data-display">Data Display</Link></li>
        </div>
        </ul>
      </div>
    </nav>
  );
}

export default Dashboard;
