import Modal from '../Modal'
import { useState, useEffect } from 'react'
import useAccountingEntry from '../../hooks/useAccountingEntry';
import AccountingEntry from './AccountingEntry';
import STATE from '../../helpers/STATE';
import useCustomer from '../../hooks/useCustomer';
import moment from 'moment/moment';
import MOVEMENT_TYPES from '../../helpers/MovementType';
import * as Yup from 'yup'; 
import accountingEntrySchema from '../../Validations/AccountingEntryValidator';
import savingChangesAlert from '../SavingChanges';
import Alert from '../Alert';
const AccountingEntryForm = () => {

    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState({}); 
    const [accountingEntryId, setAccountingEntryId] = useState(0);
    const [description,setDescription] = useState('');
    const [customerField, setCustomers] = useState({});
    const [account, setAccount] = useState(0);
    const [movementType, setMovementType] = useState(0);
    const [accountEntryDate, setAccountEntryDate] = useState('');
    const [accountEntryAmount, setAccountEntryAmount] = useState(0);
    const [state, setState] = useState('');
    const { customers} = useCustomer();
    const { saveAccountingEntry, accountingEntry, accountingEntries } = useAccountingEntry();



    useEffect(() => {
        if (accountingEntry?.accountingEntryId) {
            setOpen(true);
            setDescription(accountingEntry.description);
            //Not sure enough
            setCustomers(accountingEntry.customerId);
            setAccount(accountingEntry.account);
            setMovementType(accountingEntry.movementType);
            setAccountEntryDate(moment(accountingEntry.accountingEntryDate).format('YYYY-MM-DD'));
            setAccountEntryAmount(accountingEntry.accountEntryAmount);
            setState(accountingEntry.state);
            setAccountingEntryId(accountingEntry.accountingEntryId);
        }
        
    }, [accountingEntry]);
    
   
    const handleSubmit = async e => {
        e.preventDefault();
        
        try {

            await accountingEntrySchema.validate({
                description, customerId: customerField, account, movementType, accountEntryAmount, state
            });
            let result = await saveAccountingEntry({ accountingEntryId, description, customerId:customerField, account, movementType, accountEntryDate, accountEntryAmount, state }); 
        
        
            if (result) {
                savingChangesAlert()
                
                console.log('Vamos bien :s'); 
                setDescription(''); 
                setCustomers(); 
                setAccount('');
                setMovementType('');
                setAccountEntryDate('');
                setAccountEntryAmount(0);
                setState();
            };
    
            setOpen(false); 
            
        } catch (err) {

            if (err instanceof Yup.ValidationError) {
                setAlert({
                    msg: err.message
                });
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

    const onCustomersChanged = e => setCustomers(e.target.value); 

    const { msg } = alert; 

   

   

  return (
      <div className='relative min-h-scr'>
          <div className=' flex-col pt-4 pb-4  my-2'>
              <button onClick={()=>setOpen(!open)} className="py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full">Agregar Asiento Contable</button>
          </div>

          {open ? <Modal>
              <div className='flex flex-col gap-2 bg-white px-4 pb-4 rounded-lg'>
                  <h1 className='text-lg text-center text-black mt-2  font-bold'> Agregue un Asiento Contable</h1>
                  <hr />
                  {msg&& <Alert alert={alert}/>}
                  <form
                      onSubmit={handleSubmit}
                      
                  > 
                  <div className='flex flex-col gap-2 pb-4'>
                      <label htmlFor='description'>Introduzca una descripcion. </label>
                      <input id="description" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={description}
                          onChange={e=>setDescription(e.target.value)}
                      />
                  </div>
                  <hr />
                  <div className='flex flex-col-2 gap-4 pb-4'>
                  <div className='flex flex-col gap-2'>
                              <label
                                  className='text-right'
                                  htmlFor='customers'>Seleccione el cliente. </label>
                      <select id="customers"  className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={customerField}
                          onChange={onCustomersChanged}
                          >
                              {customers.map(ac => (
                                  <option key={ac.customerId} value={ac.customerId}>{ac.name}</option>
                              ))}
                              
                      </select>
                  </div>
                      <hr />

                    <div className='flex flex-col gap-2'>
                              <label
                                  className='text-center'
                                  htmlFor='account'>Introduzca la Cuenta. </label>
                      <input id="account" type="text" className='py-2  border px-10 border-gray-200 rounded-lg'
                          value={account}
                          onChange={e=>setAccount(e.target.value)}
                      />
                          </div>
                          </div>
                      <hr/>
                      <div className='flex flex-col-2 gap-4 pb-4'>
                      <div className='flex flex-col gap-2'>
                      <label htmlFor='movementType'>Elige Tipo de Movimiento. </label>
                      <select id='movementType'
                            className='py-2 px-4 border border-gray-200 rounded-lg'
                            value={movementType}
                            onChange={onMovementTypeChanged}>
                            
                            <option value="Seleccione">Tipo de Movimiento</option>
                            {Object.values(MOVEMENT_TYPES).map(movement_type =>(
                                <option key={movement_type} value={movement_type}>{movement_type}</option>
                            ))}

                              </select>
                              

                  </div>
                 
                    <hr/>
                    <div className='flex flex-col gap-2'>
                              <label
                                  className='text-center'
                                  htmlFor='accountingEntryDate'>Introduzca la Fecha del Asiento. </label>
                      <input id="accountingEntryDate" type="date" className='py-2   px-14 border border-gray-200 rounded-lg'
                          value={accountEntryDate}
                          onChange={e=>setAccountEntryDate(e.target.value)}
                              />
                             
                          </div>
                          
                          
                      </div>
                      <hr/>
                          <div className='flex flex-col-2 gap-4 pb-4'>
                    <div className='flex flex-col gap-2'>
                      <label htmlFor='accountingEntryAmount'>Monto del Asiento. </label>
                      <input id="accountingEntryAmount" type="number" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={accountEntryAmount}
                          onChange={e=>setAccountEntryAmount(e.target.value)}
                      />
                    </div>
                        
                      
                    <div className='flex flex-col gap-2'>
                              <label htmlFor='state'
                              className='text-center'> Estado </label>
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

export default AccountingEntryForm;