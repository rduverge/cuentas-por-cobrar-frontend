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
     
        if(transaction.transactionId){
            try{
                const{data} = await axiosClient.put(`/transactions/${transaction.transactionId}`, transaction,config);
                const updatedTransaction = transactions.map(transactionState=>transaction.transactionId === data.transactionId? data:transactionState);
                setTransactions(updatedTransaction);
                getTransactions();
            }catch(error){
                console.log(error);
                return false;
            }
        } else {
            try {
                const { data } = await axiosClient.post('/transactions', transaction, config); 
                setTransactions([...transactions, data]); 
                console.log(data); 
            } catch (error) {
                console.log(error); 
                return false;
            }
        }
        return true;
    }

    const setEdit=(transaction)=>setTransaction(transaction);

    const deleteTransaction = async transactionId => {
        
        const isConfirmed = confirm('Desea eliminar esta Transacción?');
        if(isConfirmed){
            try{
                
                const{data} = await axiosClient.delete(`/transactions/${transactionId}`,config);
                const updatedTransaction = transactions.filter(transactionsState=>transactionsState.transactionId !== transactionId);
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