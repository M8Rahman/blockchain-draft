import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function ProjectCreation() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const [projectDetails, setProjectDetails] = useState({
    id: '',
    name: '',
    area: '',
    budget: 0,
    treasury: '',
  });

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.getAccounts();
          setAccounts(accounts);
          setIsConnected(true); // Set connection state to true when connected
        } catch (error) {
          console.error('User denied account access:', error);
        }
      } else {
        const web3Instance = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
        setIsConnected(true); // Set connection state to true when connected
      }
    };

    initWeb3();
  }, []);

  useEffect(() => {
    const contractABI = [
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "_budget",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "_id",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_name",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "_area",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "_treasury",
            "type": "address"
          }
        ],
        "name": "allocateBudget",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_id",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "sendFundsToBuilder",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_id",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
          }
        ],
        "name": "sendInstallment",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_id",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "_builder",
            "type": "address"
          }
        ],
        "name": "setBuilder",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "_id",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "_cityCorporation",
            "type": "address"
          }
        ],
        "name": "setCityCorporation",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "allProjectIDs",
        "outputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "cityCorporationToBuilder",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getAllProjectDetails",
        "outputs": [
          {
            "internalType": "string[]",
            "name": "",
            "type": "string[]"
          },
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          },
          {
            "internalType": "uint256[]",
            "name": "",
            "type": "uint256[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "projects",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "allocatedBudget",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "financeMinistry",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "treasury",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "cityCorporation",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "builder",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "projectID",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "projectName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "projectArea",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "installmentNumber",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "string",
            "name": "",
            "type": "string"
          }
        ],
        "name": "treasuryToCityCorporation",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];

    const contractAddress = '0x6Fb1906a96Af46fAC1eBe0fE022F0c7E96356ebd'; // Replace with your actual contract address

    if (web3) {
      const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
      setContract(contractInstance);
    }
  }, [web3]);

  const handleInputChange = (e) => {
    setProjectDetails({ ...projectDetails, [e.target.name]: e.target.value });
  };

  const handleAllocateBudget = async () => {
    try {
      if (!isConnected) {
        console.error('Not connected to MetaMask. Please connect first.');
        return;
      }

      if (!contract) {
        console.error('Contract instance not available. Please wait for the contract to initialize.');
        // Optionally, you could initiate the contract initialization process here
        return;
      }

      if (!projectDetails.budget || !projectDetails.id || !projectDetails.name || !projectDetails.area || !projectDetails.treasury) {
        console.error('Please fill in all the required fields.');
        return;
      }

      await contract.methods.allocateBudget(
        projectDetails.budget,
        projectDetails.id,
        projectDetails.name,
        projectDetails.area,
        projectDetails.treasury
      ).send({ from: accounts[0] });

      console.log('Budget allocated successfully!');
    } catch (error) {
      console.error('Error allocating budget:', error);
    }
  };

  return (
    <div>
      {!isConnected ? (
        <button
          className="text-black bg-sky-400 rounded-xl mt-4 h-8 w-[128px]"
          type="button"
          onClick={() => setIsConnected(true)}
        >
          Connect to MetaMask
        </button>
      ) : (
        <>
          <input
            type="text"
            name="id"
            placeholder="Project ID"
            value={projectDetails.id}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={projectDetails.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="area"
            placeholder="Project Area"
            value={projectDetails.area}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            value={projectDetails.budget}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="treasury"
            placeholder="Treasury"
            value={projectDetails.treasury}
            onChange={handleInputChange}
          />
      
          <button
            className="text-black bg-sky-400 rounded-xl mt-4 h-8 w-[128px]"
            type="button"
            onClick={handleAllocateBudget}
          >
            Allocate Budget
          </button>
        </>
      )}
    </div>
  );
}

export default ProjectCreation;
