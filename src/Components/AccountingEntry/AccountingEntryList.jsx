import React from 'react'
import { CustomerProvider } from '../../context/CustomerProvider';
import useAccountingEntry from '../../hooks/useAccountingEntry'
import AccountingEntry from './AccountingEntry';
const AccountingEntryList = () => {

   

    const { accountingEntries } = useAccountingEntry();
    return (
      
      <>
          {accountingEntries.length ? (
              <>
                  <div className='flex flex-col'>
                      <div className='overflow-x-auto'>
                          <div className='p-1.5 w-full inline-block align-middle'>
                              <div className='overflow-hidden border rounded-lg'>
                                  <table className='min-w-full divide-y divide-gray-200'>
                                      <thead className='bg-gray-50'>
                                          <tr>
                                                <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>Id</th>
                                                <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Descripcion</th>
                                                <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Cliente</th>
                                                <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Cuenta</th>
                                                <th
                                                    scope="col"
                                                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Tipo de Movimiento</th>
                                                <th
                                                    scope="col"
                                                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Fecha de Asiento</th>
                                                <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Monto del Asiento</th>
                                                <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Estado</th>
                                                
                                                <th
                                                    scope="col"
                                                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Editar</th>
                                                <th
                                                    scope="col"
                                                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Borrar</th>
                                            
                                          </tr>
                                      </thead>
                                      <tbody className='divide-y divide-gray-200'>
                                          {accountingEntries.map(accountingEntry => (
                                              <AccountingEntry
                                                  key={accountingEntry.accountingEntryId}
                                                  accountingEntry={accountingEntry}
                                              />
                                          ))}
                                      
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </>
          ) : (
              <>
                  <h2 className='font-black text-3xl text-center'>No hay Asientos Contables</h2>
              </>
          
          )}
      
            </>
            
  )
}

export default AccountingEntryList
