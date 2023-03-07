
import { useContext } from "react";
import DocumentContext from "../context/DocumentProvider";
const useDocument = () => useContext(DocumentContext);


export default useDocument
