import { Link } from 'react-router-dom'
import Nav from './Nav'
import React from 'react'

const Menu = () => {
    return (
        <>
           <header className="px-20 py-10  bg-cyan-700  rounded-b-lg" >
        <div className="container px-10 mx-auto flex flex-col lg:flex-row justify-between items-center">
            <h1 className="font-bold text-2xl text-white text-center uppercase" >Cuentas Por {' '} 
            <span className="text-white font-black" >Cobrar</span>
            </h1>
        <Nav/>
        </div>


    </header>
            
        </>
    
  )
}

export default Menu;
