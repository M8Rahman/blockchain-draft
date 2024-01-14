import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProjectCreation from './ProjectCreation';
import ProjectManagement from './ProjectManagement';
import InstallmentTransfer from './InstallmentTransfer';
import FundsTransfer from './FundsTransfer';
import DataDisplay from './DataDisplay';
import Builder from './Builder';
// import Metamask from './Metamask';


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* {!isLoginPage && <Navbar />} */}
        <Dashboard/>
        <Routes>
          <Route path="/project-creation" element={<ProjectCreation/>} />
          <Route path="/project-management" element={<ProjectManagement/>} />
          <Route path="/installment-transfer" element={<InstallmentTransfer/>} />
          <Route path="/funds-transfer" element={<FundsTransfer/>} />
          <Route path="/data-display" element={<DataDisplay/>} />          
          <Route path="/builder" element={<Builder/>} />          
          {/* <Route path="/metamask" element={<Metamask/>} /> */}
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;


// const App = () => {
//   const isLoginPage = window.location.pathname === '/login';
//   return (
    
//   );
// };

// export default App;