import React from 'react'
import TransactionList from '../Components/Transaction/TransactionList'
import { TransactionProvider } from '../context/TransactionProvider';
import TransactionForm from '../Components/Transaction/TransactionForm';
import Customer from '../Components/Customers/Customer';
import { CustomerProvider } from '../context/CustomerProvider';
import Document from '../Components/Document/Document';
import { DocumentProvider } from '../context/DocumentProvider';

const TransactionManagement = () => {
    return (
      
      <TransactionProvider>
        <CustomerProvider>
            <DocumentProvider>
            
                <TransactionForm /> 
            </DocumentProvider>
        </CustomerProvider>

          
          <TransactionList />
        
   </TransactionProvider>
  )
}

export default TransactionManagement;