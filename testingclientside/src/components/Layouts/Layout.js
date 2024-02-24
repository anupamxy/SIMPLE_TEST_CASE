import React from 'react'
import Header from './Header'
import Footer from './Footer'

import  { Toaster } from 'react-hot-toast';


const Layout = (porps) => {
  return (
    <div>
   <Header/>
 <main style={{minHeight:"80vh"}}>

         {porps.children}
    </main>
    <Toaster />
   
    </div>
  )
}

export default Layout;
