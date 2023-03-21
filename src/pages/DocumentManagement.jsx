import React from 'react'
import DocumentList from '../Components/Document/DocumentList'
import { DocumentProvider } from '../context/DocumentProvider';
import DocumentForm from '../Components/Document/DocumentForm';


const DocumentManagement = () => {
    return (
      
        <DocumentProvider>
        <div className='mx-auto px-10'>
        <DocumentForm />
        
          
          <DocumentList />
          </div>
   </DocumentProvider>
  )
}

export default DocumentManagement
