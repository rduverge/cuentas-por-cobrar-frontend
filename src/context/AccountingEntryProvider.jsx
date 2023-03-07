import axios from "axios";
import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";

const AccountingEntryContext=createContext();
const AccountingEntryProvider=({children}) =>{
    const [accountingEntries, setAccountingEntries]=useState([]);
    const [accountingEntry, setAccountingEntry] = useState({});

    useEffect(() =>{
        const getAccountingEntries=async()=>{
            try{
                
                const {data}= await axiosClient('/accountingEntries');
                setAccountingEntries(data);
            } catch(error){
                console.log(error);
            }
        }
        getAccountingEntries();
    }, []);

    const saveAccountingEntry = async(accountingEntry)=>{
        // const token = localStorage.getItem('token');

        if(accountingEntry.id){
            try{
                const{data}= await axiosClient.put(`accountingEntries/${accountingEntry.id}`, accountingEntry)
                const updatedAccountingEntry = accountingEntries.map(accountingEntryState => accountingEntryState._id === data._id? data:accountingEntryState)
                setAccountingEntries(updatedAccountingEntry);
            }catch(error){
                console.log(error.response.data.msg);
                return false;
            }
        }
    }

    return true;
}
const setEdit=(accountingEntry) => setAccountingEntry(accountingEntry);

const deleteAccountingEntry= async id=>{
    const isConfirmed=confirm('Desea eliminar este asiento contable?');
    if(isConfirmed){
        try{
            const{data}=await axiosClient.delete(`/accountingEntries/${id}`);
            const updatedAccountingEntry=accountingEntries.filter(accountingEntriesState=>accountingEntriesState._id==id);
            setAccountingEntries(updatedAccountingEntries);
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
        deleteAccountingEntry
    }}></AccountingEntryContext.Provider>
)

export{
    AccountingEntryProvider
}

export default AccountingEntryContext;