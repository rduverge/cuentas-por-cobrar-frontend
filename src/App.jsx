import { useState } from 'react'

import DocumentManagement from './pages/DocumentManagement';
import AccountingEntryManagement from './pages/AccountingEntryManagement'
import MainLayout from './Layout/MainLayout'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import CustomerManagement from './pages/CustomerManagent'
import TransactionManagement from './pages/TransactionManagement'
import DashBoard from './pages/TransactionChart';
import DashboardManagement from './pages/DashboardManagement';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<DashboardManagement/>}/>
          <Route path='documents' element={<DocumentManagement />} />
          <Route path='customers' element={<CustomerManagement/>}/>
          <Route path='accountingEntries' element={<AccountingEntryManagement/>}/>
          <Route path='transaction' element={<TransactionManagement/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
