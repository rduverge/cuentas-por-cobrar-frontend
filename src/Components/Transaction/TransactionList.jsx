import useTransaction from '../../hooks/useTransaction'
import Transaction from './Transaction';
const TransactionList = () => {

    const { transactions } = useTransaction();
  return (
      <>
          {transactions.length ? (
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
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Tipo de Movimiento</th>
                                                <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Tipo de Documento</th>
                                                <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Fecha de la Transacción</th>
                                                <th
                                                    scope="col"
                                                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Cliente</th>
                                                <th
                                                    scope="col"
                                                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Monto</th>
                                                <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Numero del Documento</th>
                                                
                                                <th
                                                    scope="col"
                                                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Editar</th>
                                                <th
                                                    scope="col"
                                                    className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Borrar</th>
                                            
                                          </tr>
                                      </thead>
                                      <tbody className='divide-y divide-gray-200'>
                                          {transactions.map(transaction => (
                                              <Transaction
                                                  key={transaction.transactionId}
                                                  transaction={transaction}
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
                  <h2 className='font-black text-3xl text-center'>No hay Transacciones</h2>
              </>
          
          )}
      
    </>
  )
}

export default TransactionList
