import { Link } from 'react-router-dom'

import React from 'react'

const Menu = () => {
    return (
        <>
           <header className="py-10  dark:bg-blue-800" >
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-gray-200 text-center" >Cuentas Por {' '} 
            <span className="text-white font-black" >Cobrar</span>
            </h1>
            <nav className="flex flex-col itemscenter lg:flex-row gap-4 mt-5
            lg:mt-0 ">
                           <Link to="/" className="text-white text-sm uppercase font-bold">Dashboard</Link>
                        
                        <Link to="/documents" className="text-white text-sm uppercase font-bold">Tipos de documentos</Link>
                        
                        <Link to="/customers" className="text-white text-sm uppercase font-bold">Clientes</Link>
                        <Link to="/accountingEntries" className="text-white text-sm uppercase font-bold">Asientos contables</Link>
                        <Link to="/transaction" className="text-white text-sm uppercase font-bold">Transacciones</Link>
               
              
            </nav>
        </div>


    </header>
            
        </>
    
  )
}

export default Menu;
