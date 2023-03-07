import { useState } from 'react'

import DocumentManagement from './pages/DocumentManagement';
import AccountingEntryManagement from './pages/AccountingEntryManagement'
import MainLayout from './Layout/MainLayout'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import CustomerManagement from './pages/CustomerManagent'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='documents' element={<DocumentManagement />} />
          <Route path='customers' element={<CustomerManagement/>}/>
          <Route path='accountingEntries' element={<AccountingEntryManagement/>}/>
          
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
