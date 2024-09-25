import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import { Button } from '../ui/button'



const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
        <div className='container mx-auto flex justify-between items-center'>
            {/* Logo */}
            <Link href='/'>
                <h1 className='text-2xl fonet-semibold'>
                    Logo
                </h1>
            </Link>
            <div className="flex items-center gap-8">
                <Navbar />
                <Link href='/contacts'>
                <Button  >Login</Button>
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header