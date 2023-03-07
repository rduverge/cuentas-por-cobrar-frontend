import React from 'react'
import DocumentList from '../Components/Document/DocumentList'
import { DocumentProvider } from '../context/DocumentProvider';
import DocumentForm from '../Components/Document/DocumentForm';

const DocumentManagement = () => {
    return (
      
        <DocumentProvider>
            
                <DocumentForm/>
            
          
         <DocumentList/>
   </DocumentProvider>
  )
}

export default DocumentManagement
