import React from 'react'

import { TransactionProvider } from '../context/TransactionProvider'

import TransactionChart from './TransactionChart'

const DashboardManagement = () => {
    return (
        <div className='mb-20 pt-15 mx-auto px-10'>
          
            <div className='mb-12'>
            <TransactionProvider>
          
                <TransactionChart />
                </TransactionProvider>
                </div>
                
           
            </div>
  )
}

export default DashboardManagement
