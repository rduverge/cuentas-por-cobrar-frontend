import Modal from '../Modal'
import { useState, useEffect } from 'react'
import useAccountingEntry from '../../hooks/useAccountingEntry';
import AccountingEntry from './AccountingEntry';
import STATE from '../../helpers/STATE';
import useCustomer from '../../hooks/useCustomer';
import moment from 'moment/moment';
import MOVEMENT_TYPES from '../../helpers/MovementType';
const AccountingEntryForm = () => {

    const [open, setOpen] = useState(false);
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
            setAccountEntryAmount(accountingEntry.accountingEntryAmount);
            setState(accountingEntry.state);
            setAccountingEntryId(accountingEntry.accountingEntryId);
        }
        
    }, [accountingEntry]);
    
   
    const handleSubmit = async e => {
        e.preventDefault(); 
        
        let result = await saveAccountingEntry({ accountingEntryId, description, customerId:customerField, account, movementType, accountEntryDate, accountEntryAmount, state }); 
        
        
        if (result) {
            
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

    // const filteredAccountingEntries = accountingEntries.filter((entry) =>
    //     (!customerField || entry.customer.customerId === customerField) &&
    //     (!accountingEntryId ||
    //         entry.accountingEntryId === parseInt(accountingEntryId))
    // );

    // const filterActions=  accountingEntries.filter((e)=> e.cus)
    

   

  return (
      <div className='relative min-h-scr'>
          <div className=' flex-col  my-2'>
              <button onClick={()=>setOpen(!open)} className="Py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full">Agregar Asiento Contable</button>
          </div>

          {open ? <Modal>
              <div className='flex flex-col gap-2 bg-white px-4 pb-4 rounded-lg'>
                  <h1 className='text-lg text-black mt-2 pr-48'> Agregue un Asiento Contable</h1>
                  <hr />

                  <form
                      onSubmit={handleSubmit}
                      
                  > 
                  <div className='flex flex-col gap-2'>
                      <label htmlFor='description'>Introduzca una descripcion. </label>
                      <input id="description" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={description}
                          onChange={e=>setDescription(e.target.value)}
                      />
                  </div>
                  <hr />

                  <div className='flex flex-col gap-2'>
                      <label htmlFor='customers'>Seleccione el cliente. </label>
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
                      <label htmlFor='account'>Introduzca la Cuenta. </label>
                      <input id="account" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={account}
                          onChange={e=>setAccount(e.target.value)}
                      />
                    </div>
                      <hr />
                    
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
                      <label htmlFor='accountingEntryDate'>Introduzca la Fecha del Asiento. </label>
                      <input id="accountingEntryDate" type="date" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={accountEntryDate}
                          onChange={e=>setAccountEntryDate(e.target.value)}
                      />
                    </div>
                        <hr />

                    <div className='flex flex-col gap-2'>
                      <label htmlFor='accountingEntryAmount'>Introduzca el Monto del Asiento. </label>
                      <input id="accountingEntryAmount" type="number" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={accountEntryAmount}
                          onChange={e=>setAccountEntryAmount(e.target.value)}
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

                  
                  <div className='flex flex-row gap-2 pt-6'>
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

export default AccountingEntryForm;