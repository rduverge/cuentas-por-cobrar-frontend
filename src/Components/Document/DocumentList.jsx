import React from 'react'
import useDocument from '../../hooks/useDocument'
import Document from './Document';
const DocumentList = () => {

    const { documents } = useDocument();
  return (
      <>
          {documents.length ? (
              <>
                  <div className='flex flex-col'>
                      <div className='overflow-x-auto'>
                          <div className='p-1.5 w-full inline-block align-middle container py-16 m-auto'>
                              <div className='overflow-hidden border rounded-lg'>
                                  <table className='min-w-full divide-y divide-gray-200'>
                                      <thead className='bg-blue-200'>
                                          <tr>
                                              <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '>Id</th>
                                              <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'
                                              >Descripcion</th>
                                              <th
                                                  scope="col"
                                                  className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase'>Cuenta contable</th>
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
                                          {documents.map(document => (
                                              <Document
                                                  key={document.documentId}
                                                  document={document}
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
                  <h2 className='font-black text-3xl text-center'>No hay tipos de documentos</h2>
              </>
          
          )}
      
    </>
  )
}

export default DocumentList
