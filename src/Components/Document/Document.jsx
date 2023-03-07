import useDocument from "../../hooks/useDocument"

const Document = ({document}) => {

    const { setEdit, deleteDocument } = useDocument(); 
    const { documentId, description, ledgerAccount, state } = document;
  return (
      
          <tr>
              <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                  {documentId}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {description}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                  {ledgerAccount}
              </td>
              <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                   {state}
                  
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                  <button 
                      type="button"
                      className="text-green-500 hover:Text-green-700 rounded-lg"
                    onClick={()=>setEdit(document)}>Editar</button>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
              <button 
                      type="button"
                      className="text-red-500 hover:Text-red-700 rounded-lg"
                    onClick={()=>deleteDocument(documentId)}>Borrar</button>
                  
              </td>
          </tr>
  )
}

export default Document;
