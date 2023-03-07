
import { useContext } from "react";
import CustomerContext from "../context/CustomerProvider";
const useCustomer = () => useContext(CustomerContext);


export default useCustomer;
