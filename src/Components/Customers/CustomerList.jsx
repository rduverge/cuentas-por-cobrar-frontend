import useCustomer from "../../hooks/useCustomer";
import Customer from "./Customer";


import React from 'react'

const CustomerList = () => {
    const { customers } = useCustomer(); 
  return (
    <>
    
    <div>
        <div className="py-16 bg-gray-50 overflow-hidden">
  <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
  <div>
  <span className="text-gray-600 text-lg font-semibold">Clientes</span>
  <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
    Estos son nuestros clientes!{" "}
    <br className="lg:block" hidden="" /> conocelos!
  </h2>
</div>
<div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
    {customers.map(customer=>(
      <Customer
      key={customer.CustomerId}
      customer={customer}/>
    ))}
  </div>
</div>
</div>

      
    </div>
    
    </>
  )
}

export default CustomerList;
