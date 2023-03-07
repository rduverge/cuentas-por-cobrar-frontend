import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";

const TransactionContext=createContext();
const TransactionProvider = ({children}) => {

    const[transactions, setTransactions]= useState([]);
    const[transaction, setTransaction]=useState({});

    useEffect(()=>{
        const getTransactions = async()=>{
            try{

                const {data}= await axiosClient('/transactions');

                setTransactions(data);
            }
            catch(error){
                console.log(error);
            }
        }
        getTransactions();
    }, []);

    const saveTransaction= async(transaction)=>{
        const token=localStorage.getItem('token');
        
        if(transaction.id){
            try{
                const{data} = await axiosClient.put(`/transactions/${transaction.id}`, transaction);
                const updatedTransaction = transactions.map(transactionState=>transaction._id === data._id? data:transactionState);
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
                
                const{data} = await axiosClient.delete(`/transactions/${id}`);
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