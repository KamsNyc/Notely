'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

function Header() {
  //states
  const [isOpen, setIsOpen] = useState(false)

  //functions
  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='h-[57px] border-b border-[#DBDBDB] flex items-center justify-center relative'>
         {/* LOGO */}
         <h1 className='text-[32px] font-black text-primary uppercase'>Notely</h1>
        {/* HAMBURGER MENU */}
        <Image 
        src={'/HamburgerMenu.svg'}
        alt='Hamburger Menu'
        width={24}
        height={24}
        className='absolute right-4 top-1/2 translate-y-[-50%]'
        onClick={handleMenu}
        />
        {/* OPEN MENU */}
        {
          isOpen && (
            <div className="absolute top-[57px] w-full flex items-center justify-between px-4 border-b py-2">
              {/* Links */}
              <div className="flex items-center gap-4">
                <Link href={'#about'}>About</Link>
                <Link href={'#features'}>Features</Link>
                <Link href={'#contact'}>Contact</Link>
              </div>
              {/* BUTTON */}
              <button className='font-medium text-[14px] bg-primary text-white px-3 py-2 rounded-[5px]'>Get Started</button>
            </div>
          )
        }

    </nav>
  )
}

export default Header
