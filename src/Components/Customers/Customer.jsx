import React from 'react';
import useCustomer from '../../hooks/useCustomer';
import { Link } from 'react-router-dom';
import StateBadge from '../StateBadge';

const Customer = ({ customer }) => {
  const { setEdit, deleteCustomer } = useCustomer(); 
  const { customerId, name, identification, creditLimit, state } = customer;



  return (
    <div>
      <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-blue-600">
              {name}
            </h5>
            <p className="text-sm text-gray-600">
              Cedula: {identification}
            </p>
            <p className="text-sm text-gray-600">
              Limite de Credito: ${creditLimit}
            </p>
            <div className='flex flex-col-2 gap-2'>
              <p className=" ">Estado:</p>
              <StateBadge state={state} />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <button
              type="button"
              className="text-green-500 hover:Text-green-700 rounded-lg"
              onClick={() => setEdit(customer)}
            >
              Editar
            </button>
            <button
              type="button"
              className="text-red-500 hover:Text-red-700 rounded-lg"
              onClick={() => deleteCustomer(customerId)}
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
