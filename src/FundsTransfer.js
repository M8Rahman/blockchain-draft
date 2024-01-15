import React, { useState } from 'react';

function FundsTransfer() {
  const [fundsAmount, setFundsAmount] = useState(0);

  // Handle input changes
  const handleInputChange = (e) => {
    setFundsAmount(e.target.value);
  };

  // Handle funds transfer to builder
  const handleTransferFunds = () => {
    // Implement logic to trigger the sendFundsToBuilder function on the smart contract
  };

  return (
    <div>
      <h1 className="text-4xl mb-5 ml-36">Funds Transfer to Builder</h1>
      <form className="border-4 border-sky-500  m-2 p-4 w-2/5 ml-44 shadow-lg rounded-lg">
        <label className="">
          Project ID:
          <input className="ml-[55px] mb-2 border border-black" type="text" name="id" onChange={handleInputChange} />
        </label>
        <br></br>
        <label>
          Funds Amount:
          <input className="ml-[19px] mb-2 border border-black" type="number" onChange={handleInputChange} />
        </label>
        <br></br>
        <button className="text-black bg-sky-400 rounded-xl mt-4 h-9 w-[188px]" type="button" onClick={handleTransferFunds}>
          Transfer Funds to Builder
        </button>
      </form>
    </div>
  );
}

export default FundsTransfer;
