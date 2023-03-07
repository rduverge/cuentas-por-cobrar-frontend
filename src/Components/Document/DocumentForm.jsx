
import Modal from '../Modal'
import { useState, useEffect } from 'react'
import useDocument from '../../hooks/useDocument';
import Document from './Document';
import STATE from '../../helpers/STATE';
const DocumentForm = () => {

    const [open, setOpen] = useState(false); 
    const [documentId, setDocumentId] = useState(0); 
    const [description, setDescription] = useState('');
    const [ledgerAccount, setLedgerAccount] = useState(0); 
    const [state, setState] = useState('');
    const { saveDocument, document} = useDocument();

    useEffect(() => {
        if (document?.documentId) {
            setOpen(true); 
            setDescription(document.description);
            setLedgerAccount(document.ledgerAccount);
            setState(document.state);
             setDocumentId(document.documentId);
        }
        
    }, [document]);
    
    const handleSubmit = async e => {
        e.preventDefault(); 

        let result = await saveDocument({ documentId,description, ledgerAccount, state }); 
        if (result) {
            console.log('Lo estas logrando!'); 
            setDescription(''); 
            setLedgerAccount(0); 
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
              <button onClick={()=>setOpen(!open)} className="Py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full">Agregar Documento</button>
          </div>

          {open ? <Modal>
              <div className='flex flex-col gap-2 bg-white px-4 pb-4 rounded-lg'>
                  <h1 className='text-lg text-black mt-2 pr-48'> Agregue un tipo de documento</h1>
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
                      <label htmlFor='ledgerAccount'>Introduzca Cuenta Contable. </label>
                      <input id="ledgerAccount" type="number" className='py-2 px-4 border border-gray-200 rounded-lg'
                          value={ledgerAccount}
                          onChange={e=>setLedgerAccount(e.target.value)}
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

export default DocumentForm
