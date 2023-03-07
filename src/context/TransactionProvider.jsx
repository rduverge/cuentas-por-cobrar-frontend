import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";
import config from "../config/header";

const TransactionContext=createContext();
const TransactionProvider = ({children}) => {

    const[transactions, setTransactions]= useState([]);
    const[transaction, setTransaction]=useState({});

    useEffect(()=>{
       
        getTransactions();
    }, []);

    const getTransactions = async()=>{
        try{

            const {data}= await axiosClient('/transactions',config);

            setTransactions(data);
        }
        catch(error){
            console.log(error);
        }
    }

    const saveTransaction= async(transaction)=>{
     
        if(transaction.id){
            try{
                const{data} = await axiosClient.put(`/transactions/${transaction.id}`, transaction,config);
                const updatedTransaction = transactions.map(transactionState=>transaction.id === data.id? data:transactionState);
                setTransactions(updatedTransaction);
            }catch(error){
                console.log(error);
                return false;
            }
        }
        return true;
    }

    const setEdit=(transaction)=>setTransaction(transaction);

    const deleteTransaction = async id => {
        
        const isConfirmed = confirm('Desea eliminar esta Transacción?');
        if(isConfirmed){
            try{
                
                const{data} = await axiosClient.delete(`/transactions/${id}`,config);
                const updatedTransaction = transactions.filter(transactionsState=>transactionsState._id !== id);
                setTransactions(updatedTransaction);
            }catch(error){
                console.log(error);
            }
        }
    }
    return(
        <TransactionContext.Provider
        value={{
            transactions,
            saveTransaction,
            setEdit,
            transaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}
export{
    TransactionProvider
}

export default TransactionContext;