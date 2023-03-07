import React from 'react'
import AccountingEntryList from '../Components/AccountingEntry/AccountingEntryList'
import { AccountingEntryProvider } from '../context/AccountingEntryProvider';
import AccountingEntryForm from '../Components/AccountingEntry/AccountingEntryForm';

const AccountingEntryManagement = () => {
    return (
      
        <AccountingEntryProvider>
            
                <AccountingEntryForm/>
            
          
         <AccountingEntryList/>
   </AccountingEntryProvider>
  )
}

export default AccountingEntryManagement