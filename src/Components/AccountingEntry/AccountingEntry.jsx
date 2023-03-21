import { CustomerProvider } from "../../context/CustomerProvider";
import useAccountingEntry from "../../hooks/useAccountingEntry"

import StateBadge from "../StateBadge";
import MovementTypeBadge from "../MovementTypeBadge";

const AccountingEntry = ({ accountingEntry } ) => {
    const { accountingEntryId, description, customerId,customer, account, movementType, accountEntryAmount, accountEntryDate, state } = accountingEntry;
    
    console.log(accountingEntry);
   
  
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
              {customer.name}
              
              
                   </td>
            
             
             
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {account}
                  
              </td>
              
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   <MovementTypeBadge movementType={movementType}/>
                  
              </td>
              
          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
              {formatDate(  accountEntryDate)}
                  
                  
              </td>

              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {    accountEntryAmount}
                  
              </td>

          <td className="px-6 py-4 text-sm  whitespace-nowrap">
              <StateBadge state={state} />
                  
                  
              </td>

            
          </tr>
         
  )
}

export default AccountingEntry;
