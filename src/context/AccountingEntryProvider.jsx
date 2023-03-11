
import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";
import config from "../config/header";

import { swalButton } from "../Components/DeletingFile";
import Swal from "sweetalert2";
const AccountingEntryContext=createContext();
const AccountingEntryProvider=({children}) =>{
    const [accountingEntries, setAccountingEntries]=useState([]);
    const [accountingEntry, setAccountingEntry] = useState({});

    useEffect(() =>{
       
        getAccountingEntries();
    }, []);


    const getAccountingEntries=async()=>{
        try{
            
            const {data}= await axiosClient('/accountingEntries',config);
            setAccountingEntries(data);

            console.log(data);
           
        } catch(error){
            console.log(error);
        }
    }

    const saveAccountingEntry = async(accountingEntry)=>{
        // const token = localStorage.getItem('token');

        if(accountingEntry.accountingEntryId){
            try{
                const { data } = await axiosClient.put(`/accountingEntries/${accountingEntry.accountingEntryId}`, accountingEntry, config);
                const updatedAccountingEntry = accountingEntries.map(accountingEntryState => accountingEntryState.accountingEntryId === data.accountingEntryId? data:accountingEntryState)
                setAccountingEntries(updatedAccountingEntry);
                getAccountingEntries();
            }catch(error){
                console.log(error);
                return false;
            }
        } else {
            try {
                const { data } = await axiosClient.post('/accountingEntries', accountingEntry, config);
                setAccountingEntries([...accountingEntries, data]);
               
            }
            catch (error) {
                console.error(error); 
                return false;
            
            }
        }
        return true;
    }

    const setEdit=(accountingEntry) => setAccountingEntry(accountingEntry);

const deleteAccountingEntry= async accountingEntryId=>{
    const result = await swalButton.fire({
        title: 'Está seguro?',
        text: 'No podra revertir los cambios!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí borralo!',
        cancelButtonText: 'No, cancela!',
        reverseButtons: true
         
    });

    if (result.isConfirmed) {
        
        try {
            await swalButton.fire(
                'Borrado!',
                'Se ha eliminado correctamente',
                'success'
            )
            const{data}=await axiosClient.delete(`/accountingEntries/${accountingEntryId}`);
            const updatedAccountingEntry=accountingEntries.filter(accountingEntriesState=>accountingEntriesState.accountingEntryId==accountingEntryId);
            setAccountingEntries(updatedAccountingEntry);
            getAccountingEntries();
        }catch(error){
            console.log(error);
        }
    }else if (result.dismiss === Swal.DismissReason.cancel) {
        await swalButton.fire(
            'Cancelado',
            'Se ha salvado!', 
            'error'
        )
    }
    }
    return(
        <AccountingEntryContext.Provider
        value={{
            accountingEntries,
            saveAccountingEntry,
            setEdit,
            accountingEntry,
            deleteAccountingEntry,
            }}>
            {children}
        </AccountingEntryContext.Provider>
    )

  
}



export{
    AccountingEntryProvider
}

export default AccountingEntryContext;