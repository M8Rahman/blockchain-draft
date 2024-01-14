import React, { useState } from 'react';

function InstallmentTransfer() {
  const [installmentAmount, setInstallmentAmount] = useState(0);

  // Handle input changes
  const handleInputChange = (e) => {
    setInstallmentAmount(e.target.value);
  };

  // Handle installment transfer
  const handleTransferInstallment = () => {
    // Implement logic to trigger the sendInstallment function on the smart contract
  };

  return (
    <div>
      <form className="border-4 border-sky-500  m-2 p-4 w-2/5 ml-44 shadow-lg rounded-lg">
        <h1 className="text-4xl mb-5 ml-36">Installment Transfer</h1>
        <label className="">
          Project ID:
          <input className="ml-[90px] mb-2 border border-black" type="text" name="id" onChange={handleInputChange} />
        </label>
        <br></br>
        <label >
          Installment Amount:
          <input className="ml-[19px] mb-2 border border-black" type="number" onChange={handleInputChange} />
        </label>
        <br></br>
        <button className="text-black bg-sky-400 rounded-xl  h-10 mt-4 w-[180px]" type="button" onClick={handleTransferInstallment}>
          Transfer Installment
        </button>
      </form>
    </div>
  );
}

export default InstallmentTransfer;
