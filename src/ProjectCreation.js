import React, { useState } from 'react';

function ProjectCreation() {
  const [projectDetails, setProjectDetails] = useState({
    id: '',
    name: '',
    area: '',
    budget: 0,
    treasury: '',
  });

  // Handle input changes
  const handleInputChange = (e) => {
    setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleAllocateBudget = () => {
    // Implement logic to trigger the allocateBudget function on the smart contract
  };

  return (
    <div>
      <h1 className="mb-8 text-4xl ml-36">Project Creation</h1>
      <form className="border-4 border-sky-500  m-2 p-4 w-2/5 ml-44 shadow-lg rounded-lg">
        <label className="">
          Project ID:
          <input className="ml-[70px] mb-2 border border-black" type="text" name="id" onChange={handleInputChange} />
        </label>
        <br></br>
        <label>
          Project Name:
          <input className="ml-[44px] mb-2 border border-black" type="text" name="name" onChange={handleInputChange} />
        </label>
        <br></br>
        <label>
          Project Area:
          <input className="ml-[54px] mb-2 border border-black" type="text" name="area" onChange={handleInputChange} />
        </label>
        <br></br>
        <label>
          Allocated Budget:
          <input className="ml-[19px] mb-2 border border-black" type="number" name="budget" onChange={handleInputChange} />
        </label>
        <br></br>
        <label>
          Treasury Address:
          <input className="ml-[20px] border border-black" type="text" name="treasury" onChange={handleInputChange} />
        </label>
        <br></br>
        <button className="text-black bg-sky-400 rounded-xl mt-4 h-8 w-[128px]" type="button" onClick={handleAllocateBudget}>
          Allocate Budget
        </button>
      </form>
    </div>
  );
}

export default ProjectCreation;
