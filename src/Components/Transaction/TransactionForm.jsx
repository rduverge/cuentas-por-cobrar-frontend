import Modal from '../Modal'
import { useState, useEffect } from 'react'
import useDocument from '../../hooks/useDocument';
import useCustomer from '../../hooks/useCustomer';
import MOVEMENT_TYPES from '../../helpers/MovementType';
import useTransaction from '../../hooks/useTransaction';
import STATE from '../../helpers/STATE';
import moment from 'moment/moment'; 
import { v4 as uuidv4 } from 'uuid';
import transactionSchema from '../../Validations/TransactionValidator';
import * as Yup from 'yup'; 

import savingChangesAlert from '../SavingChanges';
import Swal from 'sweetalert2';
const TransactionForm = () => {


    const [open, setOpen] = useState(false); 
   
    const [transactionId, setTransactionId] = useState(0); 
    const [movementType, setMovementType] = useState('');
    const [documentField, setDocuments] = useState(); 
    const [documentNumber, setDocumentNumber] = useState(uuidv4()); 
    const [transactionDate, setTransactionDate] = useState(0); 
    const [customerField, setCustomers] = useState(); 
    const [amount, setAmount] = useState(0);
    const [state, setState] = useState('');
    
    const {documents} = useDocument();
    const {customers} = useCustomer();
    const { saveTransaction, transaction} = useTransaction();

    useEffect(() => {
        if (transaction?.transactionId) {
            setOpen(true); 
            setMovementType(transaction.movementType);            
            //Not sure enough again
            setDocuments(transaction.documentId);
            setDocumentNumber(transaction.documentNumber);
            setTransactionDate(moment(transaction.transactionDate).format('YYYY-MM-DD'));
            setCustomers(transaction.customerId);
            setAmount(transaction.amount)
            setTransactionId(transaction.transactionId);
        }
        
    }, [transaction]);
    
    const handleSubmit = async e => {
        e.preventDefault(); 

        try {
            await transactionSchema.validate({
                movementType, documentId: documentField,
                transactionDate, customerId: customerField, amount, state
            });
            let result = await saveTransaction({ movementType, documentId: documentField, transactionDate, customerId:customerField, amount, transactionId, documentNumber}); 
            if (result) {
                savingChangesAlert();
                console.log('Vamos bien :s'); 
                setMovementType(''); 
                setDocuments(); 
                setDocumentNumber('');
                setTransactionDate('');
                setCustomers('');
                setAmount(0);
            };
            setOpen(false); 
            
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${err.message}`,
                    
                  })
            }
        }
    }
    const onMovementTypeChanged = e => {
        const values = e.target.value; 
        setMovementType(values)
    }; 

    const onStateChanged = e => {
        const values = e.target.value; 
        setState(values)
    };
    const onDocumentsChanged = e => setDocuments(e.target.value); 
    const onCustomersChanged = e => setCustomers(e.target.value); 
   
   
  return (
      <div className='relative min-h-scr'>
          <div className=' flex-col mx-auto my-2'>
              <button onClick={()=>setOpen(!open)} className="py-2 px-4  bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg rounded-full uppercase">Agregar Transacción</button>
          </div>

          {open ? <Modal>
              <div className='flex flex-col gap-2 bg-white px-4 pb-4 rounded-lg'>
                  <h1 className='text-lg text-black mt-2  text-center font-bold'> Agregue una Transacción</h1>
                  <hr />
                  
                  <form
                      onSubmit={handleSubmit}
                  > 
                  <div className='flex flex-col gap-2 pb-4'>
                          <label
                              className=''
                              htmlFor='movementType'>Elige Tipo de Movimiento. </label>
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

                  <div className='flex flex-col gap-2 pb-4'>
                      <label htmlFor='documentId'>Selecciona un tipo de documento. </label>
                      <select id="documents" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={documentField}
                          onChange={onDocumentsChanged}
                          >
                              <option value="Choose one">Opciones</option>
                              {documents.map(ac => (
                              <option key={ac.documentId} value={ac.documentId}>{ac.description}</option>
                          ))}</select>
                  </div>
                  <hr/>
                  <div className='flex flex-col-2 gap-4 pb-4'>
                  <div className='flex flex-col gap-2'>
                      <label htmlFor='transactionDate'>Introduzca la Fecha de la Transacción. </label>
                      <input id="transactionDate" type="date" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={transactionDate}
                          onChange={e=>setTransactionDate(e.target.value)}
                      />
                  </div>
                  <hr />

                  <div className='flex flex-col gap-2'>
                      <label htmlFor='documentId'>Selecciona un cliente. </label>
                      <select id="documents" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={customerField}
                          onChange={onCustomersChanged}
                          >
                              <option value="Choose one">Opciones</option>
                              {customers.map(ac => (
                              <option key={ac.customerId} value={ac.customerId}>{ac.name}</option>
                          ))}</select>
                          </div>
                          </div>
                  <hr/>


                
                      <div className='flex flex-col-2 gap-4 pb-4'>
                      <div className='flex flex-col gap-2'>
                              <label
                                  className='text-center'
                                  htmlFor='amount'>Introduzca el monto. </label>
                      <input id="amount" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={amount}
                          onChange={e=>setAmount(e.target.value)}
                      />
                  </div>
                      <hr />
                      
                          
                     
                    <div className='flex flex-col gap-2'>
                              <label
                                  className='text-center'
                                  htmlFor='state'>Estado </label>
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
                          </div>
                      <hr />
                      <div className='flex flex-col gap-2 pb-4'>
                          <label
                                className='text-center'
                                htmlFor='documentNumber'>Numero de documento: </label>
                      <input readOnly id="amount" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={documentNumber}
                          onChange={e=>setDocumentNumber(e.target.value)}
                      />
                  </div>
                      <hr />

                 
                  <div className='flex flex-row gap-2 pt-6'>
                      <button onClick={() => setOpen(!open)} className="flex-1 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg rounded-full">Cerrar</button>
                          <input
                              type='submit'
                              value="Guardar"
                              className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full" />
                      </div>
                      </form>
              </div>
              
          </Modal> : null}
      
      </div>
      
  )
}

export default TransactionForm