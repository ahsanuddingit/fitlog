import React from 'react';
import Image from 'next/image';
import Logo from '../../public/logo.png';
import Link from 'next/link';
const Navbar = () => {
    const links = <>
        <li>
            <Link href="/" className=" text-[#C2F800] font-bold bg-[#C2F800]/10 px-6 py-2 rounded-2xl">Workouts</Link>
        </li>
        <li>
            <Link href="/my-plan" className="font-bold">My Plan</Link>
        </li>
    </>
    return (
        <nav className="bg-base-100 shadow-sm">
            <div className=" container mx-auto navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className="shrink-0 flex gap-2 items-center">
                        <Image src={Logo} alt="Logo" width={32} height={32} className="h-8 w-8" />
                        <h3 className="ml-2 font-bold">FITLOG</h3>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="text-white mx-2">Plan <span className="bg-[#C2F800] text-[#000] px-2 py-1 rounded-full">0</span></a>
                    <a className="text-white">Saved <span className="bg-[#ffffff] text-[#000] px-2 py-1 rounded-full">0</span></a>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;