import { useState } from 'react'

import MainLayout from './Layout/MainLayout'
import { BrowserRouter,Route, Routes } from 'react-router-dom'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          
        </Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
