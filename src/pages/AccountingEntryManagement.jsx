import React from 'react'
import AccountingEntryList from '../Components/AccountingEntry/AccountingEntryList'
import { AccountingEntryProvider } from '../context/AccountingEntryProvider';

import Customer from '../Components/Customers/Customer';
import { CustomerProvider } from '../context/CustomerProvider';

const AccountingEntryManagement = () => {
    return (
      <div className='mx-auto px-10'>
      <AccountingEntryProvider>
        <CustomerProvider>
      
            
       
          </CustomerProvider>
            
          
          <AccountingEntryList />
        
        </AccountingEntryProvider>
        </div>
  )
}

export default AccountingEntryManagement;