export default LayoutDefault

import './style.css'
import "./tailwind.css";
import React from 'react'

function LayoutDefault({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
