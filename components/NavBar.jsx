import React, { useState } from 'react'
import Link from 'next/link'

const NavBar = () => {
    const [hiddenMenu, setHiddenMenu] = useState(false)

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
            </div>
            <div className="block sm:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                onClick={()=> setHiddenMenu(!hiddenMenu)}>
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div className={`w-full block flex-grow sm:flex sm:items-center sm:w-auto ${hiddenMenu && 'hidden'}  animate__animated animate__headShake`}>
                <div className="text-sm sm:flex-grow">
                    <Link href="/">
                        <a href="#responsive-header" className="block mt-4 sm:inline-block am:mt-0 text-xl text-teal-200 hover:text-white mr-4">
                            Home
                        </a>
                    </Link>
                    <Link href="/about">
                        <a href="#responsive-header" className="block mt-4 sm:inline-block am:mt-0 text-xl text-teal-200 hover:text-white mr-4">
                            About
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
