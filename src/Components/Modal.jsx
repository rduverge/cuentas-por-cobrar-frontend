import React from 'react'

const Modal = ({children}) => {
    return (
        <div className='relative z-50'>
            <div className='fixed inset-0 bg-black/10' aria-hidden="true" />
            
            <div className='fixed inset-0 flex item-center justify-center p-4'>
                <div className='flex min-h-full items-center justify-center'>
                    {children}
                </div>
            </div> 

        </div>
       
    
  )
}

export default Modal
