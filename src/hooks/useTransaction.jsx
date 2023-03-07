import { useContext } from "react";
import TransactionContext from "../context/TransactionProvider";
const useTransaction = () => useContext(TransactionContext);


export default useTransaction;