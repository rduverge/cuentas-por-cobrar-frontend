import { createContext, useState, useEffect } from "react";
import axiosClient from "../config/axios";
import config from "../config/header";

const CustomerContext=createContext();
const CustomerProvider = ({children}) => {

    const[customers, setCustomers]=useState([]);
    const[customer, setCustomer] = useState({});

    useEffect(()=>{
        const getCustomers= async()=>{
            try{
            
                const{data}=await axiosClient('/customers', config);
                setCustomers(data);
            } catch(error){
                console.log(error);
            }
        }
        getCustomers();
    }, []);
    

    const saveCustomer= async(customer)=>{
       
        if(customer.id){
            try{
                const{data}= await axiosClient.put(`/customers/${customer.id}`, customer, config);
                const updatedCustomer = customers.map(customersState=>customersState._id === data._id? data:customersState);
                setCustomers(updatedCustomer);
                getCustomers();
            } catch(error){
                console.log(error);
                return false;
            }
        } else{
            try{
                const{data} = await axiosClient.post('/customers', customer);
                const{createdAt, updatedAt, __v, ...savedCustomer}=data;
                setCustomers([savedCustomer,...customers]);
                getCustomers();
            } catch(error){
                console.log(error);
                return false;
            }
        }
        return true;
    }
    const setEdit=(customer)=>setCustomer(customer);
    const deleteCustomer= async id=>{
        const isConfirmed = confirm('Desea eliminar este Cliente?');
        if(isConfirmed){
            try{
                
                const{data} = await axiosClient.delete(`/customers/${id}`);
                const updatedCustomer= customers.filter(customersState=>customersState._id !== id);
                setCustomers(updatedCustomer);
            } catch(error){
                console.log(error);
            }
        }
    }

    return(
        <CustomerContext.Provider
        value={{
            customers,
            saveCustomer,
            setEdit,
            customer,
            deleteCustomer
        }}> {children}   </CustomerContext.Provider>
    )
}

export{
    CustomerProvider
}

export default CustomerContext;