import useTransaction from "../../hooks/useTransaction"

const Transaction = ({transaction}) => {

    const { setEdit, deleteTransaction } = useTransaction(); 
    const { transactionId, movementType, documentId, transactionDate, customerId, amount} = transaction;
  return (
      
          <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                  {transactionId}
              </td>
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {movementType}
              </td>
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {documentId}
              </td>
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {transactionDate}
                  
              </td>
              
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {customerId}
                  
              </td>
              
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {amount}
                  
              </td>

              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <button 
                      type="button"
                      className="text-green-500 hover:Text-green-700 rounded-lg"
                    onClick={()=>setEdit(transaction)}>Editar</button>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
              <button 
                      type="button"
                      className="text-red-500 hover:Text-red-700 rounded-lg"
                    onClick={()=>deleteTransaction(transaction)}>Borrar</button>
                  
              </td>
          </tr>
  )
}

export default Transaction;