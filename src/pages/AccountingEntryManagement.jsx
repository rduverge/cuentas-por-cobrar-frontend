import React from 'react'
import AccountingEntryList from '../Components/AccountingEntry/AccountingEntryList'
import { AccountingEntryProvider } from '../context/AccountingEntryProvider';
import AccountingEntryForm from '../Components/AccountingEntry/AccountingEntryForm';
import Customer from '../Components/Customers/Customer';
import { CustomerProvider } from '../context/CustomerProvider';

const AccountingEntryManagement = () => {
    return (
      
      <AccountingEntryProvider>
        <CustomerProvider>
      
            
          <AccountingEntryForm /> 
          </CustomerProvider>
            
          
          <AccountingEntryList />
        
   </AccountingEntryProvider>
  )
}

export default AccountingEntryManagement;