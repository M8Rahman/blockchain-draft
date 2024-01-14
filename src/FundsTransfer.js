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
      <h1>Funds Transfer to Builder</h1>
      <label>
        Funds Amount:
        <input className="ml-[19px] mb-2 border border-black" type="number" onChange={handleInputChange} />
      </label>
      <button className="text-black bg-sky-400 rounded-xl mt-4 h-8 w-[128px]" type="button" onClick={handleTransferFunds}>
        Transfer Funds to Builder
      </button>
    </div>
  );
}

export default FundsTransfer;
