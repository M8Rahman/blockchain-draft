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
      <h1>Project Creation</h1>
      <form>
        <label>
          Project ID:
          <input type="text" name="id" onChange={handleInputChange} />
        </label>
        <label>
          Project Name:
          <input type="text" name="name" onChange={handleInputChange} />
        </label>
        <label>
          Project Area:
          <input type="text" name="area" onChange={handleInputChange} />
        </label>
        <label>
          Allocated Budget:
          <input type="number" name="budget" onChange={handleInputChange} />
        </label>
        <label>
          Treasury Address:
          <input type="text" name="treasury" onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleAllocateBudget}>
          Allocate Budget
        </button>
      </form>
    </div>
  );
}

export default ProjectCreation;
