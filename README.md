# Blockchain-Based Government Fund Management System

## Overview
This project aims to enhance transparency, security, and efficiency in government fund management using blockchain technology. By leveraging smart contracts and decentralized ledger technology, the system ensures accountable and tamper-proof transactions.

## Features
- **Secure & Transparent Transactions:** Ensures immutability and traceability of funds.
- **Smart Contract-Based Automation:** Reduces manual intervention and fraud.
- **Decentralized Fund Management:** Eliminates single points of failure.
- **Efficient Fund Allocation:** Enables real-time monitoring and audits.

## Tech Stack

### Backend Development
| Purpose                  | Component/Application | Specification                 |
|--------------------------|----------------------|------------------------------|
| Code Editing            | Visual Studio Code   | Version 1.86                 |
| Local Blockchain        | Ganache             | Version 7.9.2                 |
| Smart Contract Development | Solidity        | Version 0.8.24               |
| Deployment Framework     | Truffle             | Version 5.11.5               |
| Operating System        | Windows             | Version 10                    |
| CPU                     | Intel Core i5-10400 | 2.90 GHz - 4.30 GHz          |
| Memory                  | RAM                 | 16 GB                         |
| GPU                     | VRAM                | 6 GB                          |

### Frontend Development
| Purpose             | Component/Application | Specification                     |
|---------------------|----------------------|---------------------------------|
| Programming Language | JavaScript          | -                               |
| Operating System    | Windows             | Windows 10 (64-bit)            |
| Browser Support    | Google Chrome, Brave, Firefox | -                |
| Library/Frameworks | React JS, Bootstrap, Tailwind CSS, Web3.js, Ethers.js | - |

## Installation & Setup
### Prerequisites
Ensure the following are installed on your system:
- **Node.js** (Latest LTS version)
- **Ganache** (For local blockchain simulation)
- **Truffle** (For smart contract deployment)
- **Metamask** (Browser extension for Web3 transactions)
- **Visual Studio Code** (For coding)

### Steps
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repository.git
   cd blockchain-fund-management
   ```
2. **Install Dependencies**
   ```sh
   npm install
   ```
3. **Run Ganache**
   - Open Ganache and start a new workspace.
4. **Compile & Deploy Smart Contracts**
   ```sh
   truffle compile
   truffle migrate --network development
   ```
5. **Start Frontend**
   ```sh
   npm start
   ```
6. **Connect Metamask**
   - Import the generated accounts from Ganache.
   - Set up a custom RPC using the Ganache network details.

## Usage
- Government officials can allocate and monitor fund distribution.
- Auditors can verify fund usage transparently.
- Citizens can view fund allocation records for accountability.

## Future Enhancements
- **Integration with IPFS** for document storage.
- **Multi-Signature Wallets** for fund approvals.
- **Machine Learning** to detect fraudulent activities.

