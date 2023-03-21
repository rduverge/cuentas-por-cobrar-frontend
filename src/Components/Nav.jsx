import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();

  return (
    <nav className="bg-amber-500 px-4 py-4 rounded-3xl">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link
              
              to="/"
              className={`text-white font-bold uppercase hover:text-black mx-2 ${location.pathname === '/' ? 'border-b-2 border-white' : ''}`}
            >
              Dashboard
            </Link>
            <Link
              
              to="/documents"
              className={`text-white font-bold uppercase hover:text-black mx-2 ${location.pathname === '/documents' ? 'border-b-2 border-white' : ''}`}
            >
              Tipos de documentos
            </Link>
            <Link
              
              to="/customers"
              className={`text-white font-bold uppercase hover:text-black mx-2 ${location.pathname === '/customers' ? 'border-b-2 border-white' : ''}`}
            >
              Clientes
            </Link>
            <Link
              
              to="/accountingEntries"
              className={`text-white font-bold uppercase hover:text-black mx-2 ${location.pathname === '/accountingEntries' ? 'border-b-2 border-white' : ''}`}
            >
              Asientos contables
            </Link>
            <Link
              
              to="/transaction"
              className={`text-white font-bold uppercase hover:text-black mx-2 ${location.pathname === '/transaction' ? 'border-b-2 border-white' : ''}`}
            >
              Transacciones
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
