import Modal from "../Modal"

import { useState, useEffect } from "react"
import useCustomer from "../../hooks/useCustomer"; 
import Customer from "./Customer";
import STATE from "../../helpers/STATE";

const CustomerForm = () => {

    const [open, setOpen] = useState(false); 
    const [customerId, setCustomerId] = useState(0); 
    const [name, setName] = useState('');
    const [identification, setIdentification] = useState(''); 
    const [creditLimit, setCreditLimit] = useState(0); 
    const [state, setState] = useState(); 
    const { saveCustomer, customer } = useCustomer(); 

    useEffect(() => {
        if (customer?.customerId) {
            setOpen(true);
            setName(customer.name);
            setIdentification(customer.identification);
            setCreditLimit(customer.creditLimit);
            setState(customer.state);
            setCustomerId(customer.customerId);
            
            

            
        }
    }, [customer]); 

    const handleSubmit = async e => {
        e.preventDefault(); 

        let result = await saveCustomer({ customerId,name, identification, creditLimit, state }); 

        if (result) {
            console.log('Lo estas logrando!'); 
            setName(''); 
            setIdentification(''); 
            setCreditLimit(0); 
            setState(); 

        }
        setOpen(false); 
    }
    const onStateChanged = e => {
        const values = e.target.value; 
        setState(values); 
    }

  return (
    <div className='relative min-h-scr'>
    <div className=' flex-col  my-2'>
        <button onClick={()=>setOpen(!open)} className="Py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full">Agregar Cliente </button>
    </div>

    {open ? <Modal>
        <div className='flex flex-col gap-2 bg-white px-4 pb-4 rounded-lg'>
            <h1 className='text-lg text-black mt-2 pr-48'> Agregue un Cliente</h1>
            <hr />

            <form
                onSubmit={handleSubmit}
                
            > 
            <div className='flex flex-col gap-2'>
                <label htmlFor='nombre'>Introduzca un nombre. </label>
                <input id="description" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
            </div>
            <hr />

            <div className='flex flex-col gap-2'>
                <label htmlFor='identification'>Introduzca Cedula. </label>
                <input id="identification" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                    value={identification}
                    onChange={e=>setIdentification(e.target.value)}
                />
            </div>
                      <hr />
                <div className='flex flex-col gap-2'>
                <label htmlFor='creditLimit'>Introduzca Limite de credito. </label>
                <input id="identification" type="text" className='py-2 px-4 border border-gray-200 rounded-lg'
                    value={creditLimit}
                    onChange={e=>setCreditLimit(e.target.value)}
                />
            </div>
                <hr />
                
                <div className='flex flex-col gap-2'>
                    <label htmlFor='state'>Elige el estado </label>
                    <select id="state"
                        className='py-2 px-4 border border-gray-200 rounded-lg'
                        value={state}
                        onChange={onStateChanged}
                    >
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

export default CustomerForm
