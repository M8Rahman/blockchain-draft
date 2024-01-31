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
    // <div>
    //   {/* <h1 className="text-4xl mb-5 ml-36">Funds Transfer to Builder</h1> */}
    //   <form className="border-4 border-white-950 bg-slate-400 m-2 p-4 w-2/5 ml-[425px] shadow-lg rounded-lg font-bold text-[16px] mt-[150px]">
    //     <div className='mt-8'>
    //     <label className="ml-24">
    //       Project ID:
    //       <input className="ml-[55px] mb-2 border border-black" type="text" name="id" onChange={handleInputChange} />
    //     </label>
    //     </div>
    //     <label className='ml-24'>
    //       Funds Amount:
    //       <input className="ml-[19px] mb-2 border border-black" type="number" onChange={handleInputChange} />
    //     </label>
    //     <br></br>
    //     <button className="text-black hover:text-white bg-green-400 p-1 hover:bg-green-800 rounded-xl mt-8 mb-4 h-10 w-[210px] ml-48" type="button" onClick={handleTransferFunds}>
    //       Transfer Funds to Builder
    //     </button>
    //   </form>
    // </div>
    <div class="card1 m-auto">
		<form>
        <div className='ml-24 pb-4'>
		<label className='flex'>
          <div>
		  <input className="project bg-transparent ml-20" type="text" name="id" placeholder='Project ID' onChange={handleInputChange} />
		  <hr className='ml-20 mt-1' />
		  </div>
        </label>
		</div>
        <label className='ml-24 flex'>
          <div>
			<input className="bg-transparent ml-20" placeholder='Funds Amount' type="text" onChange={handleInputChange} />
			<hr className='ml-20 mt-1'/>
		  </div>
        </label>
        <br />
        {/* <button className="text-black hover:text-white bg-green-400 p-1 hover:bg-green-800 rounded-xl mt-8 mb-4 h-10 w-[200px] ml-" type="button" onClick={handleSetBuilder}>
          Set Builder
        </button> */}
		<div className='flex justify-center ml-16'>
		<button className="shadow__btn ml-24" type="button" onClick={handleTransferFunds}>
      Transfer Funds to Builder
		</button >
		</div>
      </form>
	</div>
  );
}

export default FundsTransfer;
