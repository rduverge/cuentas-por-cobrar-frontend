import Modal from '../Modal'
import { useState, useEffect, useTransition } from 'react'
import useDocument from '../../hooks/useDocument';
import useCustomer from '../../hooks/useCustomer';
import Transaction from './Transaction';
import MOVEMENT_TYPES from '../../helpers/MovementType';
import STATE from '../../helpers/STATE';
const TransactionForm = () => {

    const [open, setOpen] = useState(false); 
    const [transactionId, setTransactionId] = useState(''); 
    const [movementType, setMovementType] = useState('');
    const [documentField, setDocuments] = useState(); 
    const [documentNumber, setDocumentNumber] = useState(''); 
    const [transactionDate, setTransactionDate] = useState(0); 
    const [customerField, setCustomers] = useState(); 
    const [amount, setAmount] = useState(0);
    const [state, setState] = useState('');
    
    const {documents} = useDocument();
    const {customers} = useCustomer();
    const { saveTransaction, transaction} = useTransition();

    useEffect(() => {
        if (transaction?.transactionId) {
            setOpen(true); 
            setMovementType(transaction.movementType);            
            //Not sure enough again
            setDocuments(transaction.documentId._id);
            setDocumentNumber(transaction.documentNumber);
            setTransactionDate(transaction.transactionDate);
            setCustomers(transaction.customerId._id);
            setAmount(transaction.amount)
        }
        
    }, [transaction]);
    
    const handleSubmit = async e => {
        e.preventDefault(); 

        let result = await saveTransaction({ movementType, documentId, transactionDate, customerId, amount }); 
        if (result) {
            console.log('Vamos bien :s'); 
            setMovementType(''); 
            setDocuments(); 
            setDocumentNumber('');
            setTransactionDate('');
            setCustomers('');
            setAmount(0);
        };

        setOpen(false); 

    }
    const onMovementTypeChanged = e => {
        const values = e.target.value; 
        setMovementType(values)
    }; 

    const onStateChanged = e => {
        const values = e.target.value; 
        setState(values)
    };
   

  return (
      <div className='relative min-h-scr'>
          <div className=' flex-col  my-2'>
              <button onClick={()=>setOpen(!open)} className="Py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full">Agregar Transacción</button>
          </div>

          {open ? <Modal>
              <div className='flex flex-col gap-2 bg-white px-4 pb-4 rounded-lg'>
                  <h1 className='text-lg text-black mt-2 pr-48'> Agregue una Transacción</h1>
                  <hr />

                  <form
                      onSubmit={handleSubmit}
                  > 
                  <div className='flex flex-col gap-2'>
                      <label htmlFor='movementType'>Elige Tipo de Movimiento. </label>
                      <select id='movementType'
                            className='py-2 px-4 border border-gray-200 rounded-lg'
                            value={movementType}
                            onChange={onMovementTypeChanged}>
                            
                            <option value="Seleccione">Seleccione un Tipo de Movimiento</option>
                            {Object.values(MOVEMENT_TYPES).map(movement_type =>(
                                <option key={movement_type} value={movement_type}>{movement_type}</option>
                            ))}

                      </select>

                  </div>
                  <hr />

                  <div className='flex flex-col gap-2'>
                      <label htmlFor='documentId'>Introduzca un Tipo de Documento. </label>
                      <input id="documentId" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={documents}
                          onChange={e=>setDocuments(e.target.value)}
                      />
                  </div>
                  <hr />

                  <div className='flex flex-col gap-2'>
                      <label htmlFor='transactionDate'>Introduzca la Fecha de la Transacción. </label>
                      <input id="transactionDate" type="date" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={transactionDate}
                          onChange={e=>setTransactionDate(e.target.value)}
                      />
                  </div>
                  <hr />

                  <div className='flex flex-col gap-2'>
                      <label htmlFor='customerId'>Introduzca un Cliente. </label>
                      <input id="customerId" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={customers}
                          onChange={e=>setCustomers(e.target.value)}
                      />
                  </div>
                  <hr />

                  <div className='flex flex-col gap-2'>
                      <label htmlFor='amount'>Introduzca el monto. </label>
                      <input id="amount" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={amount}
                          onChange={e=>setAmount(e.target.value)}
                      />
                  </div>
                      <hr />
                      
                    <div className='flex flex-col gap-2'>
                        <label htmlFor='state'>Elige el estado </label>
                        <select id="state"
                            className='py-2 px-4 border border-gray-200 rounded-lg'
                            value={state}
                            onChange={onStateChanged}>

                            <option value="Seleccione">Seleccione un estado</option>
                            {Object.values(STATE).map(state => (
                                <option key={state} value={state}>{state}</option>
                            ))}
                              
                    </select>
                          
                  
                  </div>
                  <hr />

                  
                  <div className='flex flex-row gap-2'>
                      <button onClick={() => setOpen(!open)} className="flex-1 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg rounded-full">Close</button>
                          <input
                              type='submit'
                              value="Save"
                              className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full" />
                      </div>
                      </form>
              </div>
              
          </Modal> : null}
      
      </div>
      
  )
}

export default TransactionForm