import useTransaction from "../../hooks/useTransaction"
import MovementTypeBadge from "../MovementTypeBadge";
const Transaction = ({transaction}) => {

    const { setEdit, deleteTransaction } = useTransaction(); 
    const { transactionId, movementType,documentNumber, transactionDate, amount, document, customer } = transaction;
    
    const formatDate = (date) => {
        const newDate = new Date(date); 
        return new Intl.DateTimeFormat('es-Es', { dateStyle: 'long' }).format(newDate); 
    }
  return (
      
          <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                  {transactionId}
              </td>
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  <MovementTypeBadge movementType={movementType}/>
              </td>
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {document.description}
              </td>
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {formatDate(transactionDate)}
                  
              </td>
              
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {customer.name}
                  
              </td>
              
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {amount}
                  
          </td>
          
          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
              {documentNumber}
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
                    onClick={()=>deleteTransaction(transactionId)}>Borrar</button>
                  
              </td>
          </tr>
  )
}

export default Transaction;