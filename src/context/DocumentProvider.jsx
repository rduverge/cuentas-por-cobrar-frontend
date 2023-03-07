import { createContext, useState, useEffect } from "react";
//Hace falta el folder config
import axiosClient from "../c"

const DocumentContext = createContext();
const DocumentProvider = ({children}) => {

    const[documents, setDocuments] = useState([]);
    const[document, setDocument] = useState({});

    useEffect(() => {
        const getDocuments = async() =>{
            try{
                const{data} = await axiosClient('/documents');
                setDocuments(data);
            } catch(error){
                console.log(error);
            }
        }
        getDocuments();
    }, []);

    const saveDocument=async(document)=>{
        
        if(document.id){
            try{
                const{data} = await axiosClient.put('/documents/${document.id}', document, config);
                const updatedDocument=document.map(documentState=>documentState._id === data._id?data:documentState);
                setDocuments(updatedDocument);
                getDocuments();
            }catch(error){
                console.log(error);
                return false; 
            }
        } else{
            try{
                const{data} = await axiosClient.post('/documents', document);
                const{createdAt, updatedAt, __v, ...savedDocument}=data;
                setDocuments([savedDocument, ...documents]);
                getDocuments();
            } catch (error){
                console.log(error.response.data.msg);
                return false;
            }
        }

        return true;
    }

    const setEdit=(document)=>setDocument(document);
    const deleteDocument=async id =>{
        const isConfirmed=confirm('Desea eliminar este documento?');
        if(isConfirmed){
            try{
                
                const{data} = await axiosClient.delete(`/documents/${id}`);
                const updatedDocuments = documents.filter(documentsState=>documentsState._id==id);
                setDocuments(updatedDocuments);

            } catch(error){
                console.log(error);
            }
        }
    }

    return (
        <DocumentContext.Provider
            value={{
                documents,
                saveDocument, 
                setEdit,
                document,
                deleteDocument,
            }}
        >

            {children}

        </DocumentContext.Provider>
    )
}
export {
    DocumentProvider
}

export default DocumentContext; 