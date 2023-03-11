import React from 'react'

import { TransactionProvider } from '../context/TransactionProvider'
import AccountingChart from './AccountingChart'
import { AccountingEntryProvider } from '../context/AccountingEntryProvider'
import TransactionChart from './TransactionChart'

const DashboardManagement = () => {
    return (
        <div className='mb-20 pt-15'>
          
            <div className='mb-12'>
            <TransactionProvider>
          
                <TransactionChart />
                </TransactionProvider>
                </div>
             
               
                <AccountingEntryProvider>
                <AccountingChart />
                </AccountingEntryProvider>
                
           
            </div>
  )
}

export default DashboardManagement
