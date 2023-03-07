
import Modal from './Modal'
import { useState } from 'react'

const Form = () => {
    const [open, setOpen] = useState(false); 

  return (
      <div className='relative min-h-scr'>
          <div className='flex flex-col items-center my-24'>
              <button onClick={()=>setOpen(!open)} className="Py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full">Open Modal</button>
          </div>

          {open ? <Modal>
              <div className='flex flex-col gap-2 bg-white px-4 pb-4 rounded-lg'>
                  <h1 className='text-lg text-black mt-2 pr-48'>This is my modal title</h1>
                  <hr />
                  <div className='flex flex-col gap-2'>
                      <label htmlFor='email'>Please enter your email address. </label>
                      <input id="email" type="email" className='py-2 px-4 border border-gray-200 rounded-lg'/>
                  </div>
                  <hr />
                  
                  <div className='flex flex-row gap-2'>
                      <button onClick={() => setOpen(!open)} className="flex-1 py-2 px-4 bg-gray-500 hover:bg-gray-600 text-white font-bold text-lg rounded-full">Close</button>
                      <button onClick={()=>setOpen(!open)} className="flex-1 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-bold text-lg rounded-full">Save</button>
                  </div>
              </div>
          </Modal> : null}
      
    </div>
  )
}

export default Form
