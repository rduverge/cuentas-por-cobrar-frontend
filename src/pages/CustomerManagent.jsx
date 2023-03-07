import React from 'react'
import CustomerForm from '../Components/Customers/CustomerForm';
import CustomerList from '../Components/Customers/CustomerList';
import { CustomerProvider } from '../context/CustomerProvider';


const CustomerManagement = () => {
    return (
      
        <CustomerProvider>
            
                
            
          <CustomerForm/>
         <CustomerList/>
   </CustomerProvider>
  )
}

export default CustomerManagement
