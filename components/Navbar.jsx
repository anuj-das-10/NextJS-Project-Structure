import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='hidden md:block'>
        <ul className='flex md:gap-8 justify-center bg-black text-white text-lg pt-6'>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-purple-600'>Home</li>
            </Link>
            <Link href='/cs-x-resources/pyqp'>
                <li className='hover:border-b-2 hover:border-purple-600'>CSxResources</li>
            </Link>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-purple-600'>CSxEventBlog</li>
            </Link>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-purple-600'>CSxAlumni</li>
            </Link>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-purple-600'>GCSC</li>
            </Link>
            <Link href='/'>
                <li className='hover:border-b-2 hover:border-purple-600'>About</li>
            </Link>
        </ul>
      
    </div>
  )
}

export default Navbar
