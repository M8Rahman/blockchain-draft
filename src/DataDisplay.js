import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function DataDisplay() {
  const [web3, setWeb3] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [contract, setContract] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [projectData, setProjectData] = useState([]);
  // New state variables for search and sorting
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState(''); // 'budget', 'installmentNumber', 'fundsSentToCityCorporation', 'fundsSentToBuilder'

  useEffect(() => {
    const initWeb3 = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum);
        try {
          await window.ethereum.enable();
          setWeb3(web3Instance);
          const accounts = await web3Instance.eth.getAccounts();
          setAccounts(accounts);
          setIsConnected(true);
        } catch (error) {
          console.error('User denied account access:', error);
        }
      } else {
        const web3Instance = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
        setWeb3(web3Instance);
        const accounts = await web3Instance.eth.getAccounts();
        setAccounts(accounts);
        setIsConnected(true);
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
            "components": [
              {
                "internalType": "string",
                "name": "projectID",
                "type": "string"
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
                "name": "allocatedBudget",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "fundsSentToCityCorporation",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "fundsSentToBuilder",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "installmentNumber",
                "type": "uint256"
              }
            ],
            "internalType": "struct GovernmentFundManagement.ProjectSummary[]",
            "name": "",
            "type": "tuple[]"
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (criteria) => {
    setSortCriteria(criteria);
  };

  const handleSort = (data) => {
    if (sortCriteria === '') {
      return data;
    }

    return data.slice().sort((a, b) => {
      const aValue = a[sortCriteria];
      const bValue = b[sortCriteria];

      if (sortCriteria === 'budget' || sortCriteria === 'installmentNumber' || sortCriteria === 'fundsSentToCityCorporation' || sortCriteria === 'fundsSentToBuilder') {
        return aValue - bValue;
      } else {
        return aValue.localeCompare(bValue);
      }
    });
  };

  const filteredAndSortedData = handleSort(
    projectData.filter((project) => {
      const searchTermLowerCase = searchTerm.toLowerCase();
      return (
        project.projectID.toLowerCase().includes(searchTermLowerCase) ||
        project.financeMinistry.toLowerCase().includes(searchTermLowerCase) ||
        project.treasury.toLowerCase().includes(searchTermLowerCase) ||
        project.cityCorporation.toLowerCase().includes(searchTermLowerCase) ||
        project.builder.toLowerCase().includes(searchTermLowerCase) ||
        project.projectName.toLowerCase().includes(searchTermLowerCase) ||
        project.projectArea.toLowerCase().includes(searchTermLowerCase) ||
        project.allocatedBudget.includes(searchTerm) ||
        project.fundsSentToCityCorporation.includes(searchTerm) ||
        project.fundsSentToBuilder.includes(searchTerm) ||
        project.installmentNumber.includes(searchTerm)
      );
    })
  );


  const handleGetAllProjectDetails = async () => {
    try {
      if (!isConnected) {
        console.error('Not connected to MetaMask. Please connect first.');
        return;
      }

      if (!contract) {
        console.error('Contract instance not available. Please wait for the contract to initialize.');
        return;
      }

      const result = await contract.methods.getAllProjectDetails().call({ from: accounts[0] });

      // Map the result directly to ProjectSummary
      const projectDetails = result.map((project) => ({
        projectID: project.projectID,
        financeMinistry: project.financeMinistry,
        treasury: project.treasury,
        cityCorporation: project.cityCorporation,
        builder: project.builder,
        projectName: project.projectName,
        projectArea: project.projectArea,
        allocatedBudget: project.allocatedBudget.toString(),
        fundsSentToCityCorporation: project.fundsSentToCityCorporation.toString(),
        fundsSentToBuilder: project.fundsSentToBuilder.toString(),
        installmentNumber: project.installmentNumber.toString(),
      }));

      setProjectData(projectDetails);
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  };

  return (
    <div>
      {/* <h1 className="text-4xl mb-5 ml-36">Data Display</h1> */}
      {isConnected ? (
        <>
          <button
            className="text-black hover:text-white bg-green-400 p-1 hover:bg-green-800 rounded-xl mt-8 mb-4 h-10 w-[200px] ml-48 font-bold text-[16px]"
            onClick={handleGetAllProjectDetails}
          >
            All Project Details
          </button>
          <table className="table-auto ml-36 mt-4 border-separate border-spacing-2 border border-slate-50">
            <thead>
              <tr>
                <th className="border border-slate-800 bg-sky-400 px-4 py-2">Project ID</th>
                <th className="border border-slate-800 bg-white px-4 py-2">Finance Ministry</th>
                <th className="border border-slate-800 bg-sky-400 px-4 py-2">Treasury</th>
                <th className="border border-slate-800 bg-white px-4 py-2">City Corporation</th>
                <th className="border border-slate-800 bg-sky-400 px-4 py-2">Builder</th>
                <th className="border border-slate-800 bg-white px-4 py-2">Project Name</th>
                <th className="border border-slate-800 bg-sky-400 px-4 py-2">Project Area</th>
                <th className="border border-slate-800 bg-white px-4 py-2">Allocated Budget</th>
                <th className="border border-slate-800 bg-sky-400 px-4 py-2">Funds Sent to City Corporation</th>
                <th className="border border-slate-800 bg-white px-4 py-2">Funds Sent to Builder</th>
                <th className="border border-slate-800 bg-sky-400 px-4 py-2">Installment Number</th>
              </tr>
            </thead>
            <tbody>
              {projectData.map((project) => (
                <tr key={project.projectID}>
                  <td className="border border-slate-800 bg-white px-4 py-2">{project.projectID}</td>
                  <td className="border border-slate-800 bg-sky-400 px-4 py-2">{project.financeMinistry}</td>
                  <td className="border border-slate-800 bg-white px-4 py-2">{project.treasury}</td>
                  <td className="border border-slate-800 bg-sky-400 px-4 py-2">{project.cityCorporation}</td>
                  <td className="border border-slate-800 bg-white px-4 py-2">{project.builder}</td>
                  <td className="border border-slate-800 bg-sky-400 px-4 py-2">{project.projectName}</td>
                  <td className="border border-slate-800 bg-white px-4 py-2">{project.projectArea}</td>
                  <td className="border border-slate-800 bg-sky-400 px-4 py-2">{project.allocatedBudget}</td>
                  <td className="border border-slate-800 bg-white px-4 py-2">{project.fundsSentToCityCorporation}</td>
                  <td className="border border-slate-800 bg-sky-400 px-4 py-2">{project.fundsSentToBuilder}</td>
                  <td className="border border-slate-800 bg-white px-4 py-2">{project.installmentNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="border p-2 mt-4 mb-4"
      />

      {/* Sorting buttons */}
      {/* <div className="mb-4">
        <button className="mr-4" onClick={() => handleSortChange('budget')}>
          Sort by Budget
        </button>
        <button className="mr-4" onClick={() => handleSortChange('installmentNumber')}>
          Sort by Installment Number
        </button>
        <button className="mr-4" onClick={() => handleSortChange('fundsSentToCityCorporation')}>
          Sort by Funds Sent to City Corporation
        </button>
        <button onClick={() => handleSortChange('fundsSentToBuilder')}>
          Sort by Funds Sent to Builder
        </button>
      </div> */}
        </>
      ) : (
        <p>Please connect to MetaMask.</p>
      )}
    </div>
  );
}

export default DataDisplay;
