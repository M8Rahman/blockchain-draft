import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import ProjectCreation from './ProjectCreation';
import CityCorporation from './CityCorporation';
// import ProjectManagement from './ProjectManagement';
import InstallmentTransfer from './InstallmentTransfer';
import FundsTransfer from './FundsTransfer';
import DataDisplay from './DataDisplay';
import Builder from './Builder';
import Home from './Home';
import './Builder.css'
// import Metamask from './Metamask';


function App() {
  return (
    <div style={{backgroundImage:'url("")'}}>
      <BrowserRouter>
      <React.Fragment>
        {/* {!isLoginPage && <Navbar />} */}
        <Dashboard/>
        <Routes>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path="/project-creation" element={<ProjectCreation/>} />
          <Route path="/city-corporation" element={<CityCorporation/>} />
          <Route path="/installment-transfer" element={<InstallmentTransfer/>} />
          <Route path="/funds-transfer" element={<FundsTransfer/>} />
          <Route path="/data-display" element={<DataDisplay/>} />          
          <Route path="/builder" element={<Builder/>} />          
          {/* <Route path="/metamask" element={<Metamask/>} /> */}
        </Routes>
      </React.Fragment>
    </BrowserRouter>
    </div>
    
  );
}

export default App;


// const App = () => {
//   const isLoginPage = window.location.pathname === '/login';
//   return (
    
//   );
// };

// export default App;