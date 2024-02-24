'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Navbar() {
  const pathName = usePathname();

  return (
    <header className='header'>
      <Link href={'/'} className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
        <p className='purple-gradient_text'>NA</p>
      </Link>
      <nav className='flex text-lg gap-7 font-medium'>
        <Link href="/about" className={pathName === "/about" ? 'text-purple-600' : 'text-black'}>
          About
        </Link>
        <Link href="/projects" className={pathName === "/projects" ? 'text-purple-600' : 'text-black'}>
          Projects
        </Link>
        <Link href="/contact" className={pathName === "/contact" ? 'text-purple-600' : 'text-black'}>
          Contact
        </Link>
      </nav>
    </header>
  )
}

export default Navbar