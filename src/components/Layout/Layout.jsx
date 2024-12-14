import React from 'react'

import Background from '../../assets/img/bg8.jpg'
import Header from './Header'
import Footer from './Footer'

import './Layout.scss'

const Layout = ({children}) => {
    return (
        <div className='layout '>
            <Header />
           <main className=' main absolute top-0 bottom-0 min-h-full  '>{children}</main>
            <Footer />
        </div>

    )
}

export default Layout
