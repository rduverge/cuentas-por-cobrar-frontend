
import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";
import config from "../config/header";

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
    const isConfirmed=confirm('Desea eliminar este asiento contable?');
    if(isConfirmed){
        try{
            const{data}=await axiosClient.delete(`/accountingEntries/${accountingEntryId}`);
            const updatedAccountingEntry=accountingEntries.filter(accountingEntriesState=>accountingEntriesState.accountingEntryId==accountingEntryId);
            setAccountingEntries(updatedAccountingEntry);
            getAccountingEntries();
        }catch(error){
            console.log(error);
        }
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