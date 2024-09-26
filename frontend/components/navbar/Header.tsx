import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import { Button } from '../ui/button'
import Image from 'next/image'



const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white '>
        <div className='container mx-auto flex justify-between items-center'>
            {/* Logo */}
            <Link href='/'>
                <h1 className=''>
                    <Image src="/logo.png" alt="logo" width={90} height={90} />
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