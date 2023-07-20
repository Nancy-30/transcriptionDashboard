import React from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className='flex '>
      <Sidebar />
      <Dashboard/>
    </div>
  )
}

