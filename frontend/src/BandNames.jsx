import React from 'react'
import { SocketProvider } from './context/SocketContext'
import Home from './pages/Home'

const BandNames = () => {
  return (
    <SocketProvider>
      <Home />
    </SocketProvider>
  )
}

export default BandNames