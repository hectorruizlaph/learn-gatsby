import React from 'react'

import '../../styles/global.css'

import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <div className="layout">
        <Navbar />
        <div className="content">
            {children}
        </div>
        <footer>footer</footer>
    </div>
  )
}
