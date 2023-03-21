import React from 'react'
import CustomerForm from '../Components/Customers/CustomerForm';
import CustomerList from '../Components/Customers/CustomerList';
import { CustomerProvider } from '../context/CustomerProvider';


const CustomerManagement = () => {
    return (
      <div className='mx-auto px-10'>
        <CustomerProvider>
            
                
            
          <CustomerForm/>
         <CustomerList/>
        </CustomerProvider>
        </div>
  )
}

export default CustomerManagement
