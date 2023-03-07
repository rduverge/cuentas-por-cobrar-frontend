import Modal from '../Modal'
import { useState, useEffect } from 'react'
import useAccountingEntry from '../../hooks/useAccountingEntry';
import AccountingEntry from './AccountingEntry';
import STATE from '../../helpers/STATE';
const AccountingEntryForm = () => {

    const [open, setOpen] = useState(false); 
    const [accountingEntryId, setAccountingEntryId] = useState(''); 
    const [description, setDescription] = useState('');
    const [customerField, setCustomers] = useState(); 
    const [account, setAccount] = useState(0); 
    const [movementType, setMovementType] = useState(0); 
    const [accountingEntryDate, setAccountingEntryDate] = useState(0); 
    const [accountingEntryAmount, setAccountingEntryAmount] = useState(0);
    const [state, setState] = useState('');
    const {customers} = useCustomer();
    const { saveAccountingEntry, accountingEntry} = useAccountingEntry();

    useEffect(() => {
        if (accountingEntry?.accountingEntryId) {
            setOpen(true); 
            setDescription(accountingEntry.description);
            //Not sure enough
            setCustomers(accountingEntry.customerId._id);
            setAccount(accountingEntry.account);
            setMovementType(accountingEntry.movementType);
            setAccountingEntryDate(accountingEntry.accountingEntryDate);
            setAccountingEntryAmount(accountingEntry.accountingEntryAmount);
            setState(accountingEntry.state);
        }
        
    }, [accountingEntry]);
    
    const handleSubmit = async e => {
        e.preventDefault(); 

        let result = await saveAccountingEntry({ description, customerId, account, movementType, accountingEntryDate, accountingEntryAmount, state }); 
        if (result) {
            console.log('Vamos bien :s'); 
            setDescription(''); 
            setCustomers(); 
            setAccount('');
            setMovementType('');
            setAccountingEntryDate('');
            setAccountingEntryAmount(0);
            setState();
        };

        setOpen(false); 

    }
    const onStateChanged = e => {
        const values = e.target.value; 
        setState(values)
    }; 

   

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
                      <label htmlFor='customers'>Introduzca el cliente. </label>
                      <input id="customers" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={customers}
                          onChange={e=>setCustomers(e.target.value)}
                      />
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
                      <label htmlFor='movementType'>Introduzca el Tipo de Movimiento. </label>
                      <input id="movementType" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={movementType}
                          onChange={e=>setMovementType(e.target.value)}
                      />
                    </div>
                      <hr />

                    <div className='flex flex-col gap-2'>
                      <label htmlFor='accountingEntryDate'>Introduzca la Fecha del Asiento. </label>
                      <input id="accountingEntryDate" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={accountingEntryDate}
                          onChange={e=>setAccountingEntryDate(e.target.value)}
                      />
                    </div>
                        <hr />

                    <div className='flex flex-col gap-2'>
                      <label htmlFor='accountingEntryAmount'>Introduzca el Monto del Asiento. </label>
                      <input id="accountingEntryAmount" type="number" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={accountingEntryAmount}
                          onChange={e=>setAccountingEntryAmount(e.target.value)}
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

export default AccountingEntryForm