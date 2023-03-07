import useAccountingEntry from "../../hooks/useAccountingEntry"


const AccountingEntry = ({ accountingEntry }) => {
    const { accountingEntryId, description, customerId, account, movementType, accountEntryAmount, accountEntryDate, state } = accountingEntry;
  
    
    const { setEdit, deleteAccountingEntry } = useAccountingEntry(); 
   
    const formatDate = (date) => {
        const newDate = new Date(date); 
        return new Intl.DateTimeFormat('es-Es', { dateStyle: 'long' }).format(newDate);

        
    }
  return (
      
          <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                  {accountingEntryId}
              </td>
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {description}
              </td>
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {customerId}
              </td>
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {account}
                  
              </td>
              
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {movementType}
                  
              </td>
              
          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
              {formatDate(accountEntryDate)}
                  
                  
              </td>

              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {accountEntryAmount}
                  
              </td>

              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {state}
                  
              </td>

              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <button 
                      type="button"
                      className="text-green-500 hover:Text-green-700 rounded-lg"
                    onClick={()=>setEdit(accountingEntry)}>Editar</button>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
              <button 
                      type="button"
                      className="text-red-500 hover:Text-red-700 rounded-lg"
                    onClick={()=>deleteAccountingEntry(accountingEntryId)}>Borrar</button>
                  
              </td>
          </tr>
  )
}

export default AccountingEntry;
