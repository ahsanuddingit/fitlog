'use client';

import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/logo.png';
import { PlanContext } from '@/context/PlanContext';

const Navbar = () => {
  const context = useContext(PlanContext);
  const planCount = context?.add.length || 0;
  const savedCount = context?.plan.length || 0;

  const links = (
    <>
      <li>
        <Link href="/workouts" className="bg-[#C2F800]/10 font-bold text-[#C2F800] px-6 py-2 rounded-2xl">
          Workouts
        </Link>
      </li>
      <li>
        <Link href="/my-plan" className="font-bold">
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={-1} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <Link href="/" className="shrink-0 flex gap-2 items-center">
            <Image src={Logo} alt="Logo" width={32} height={32} className="h-8 w-8" />
            <h3 className="ml-2 font-bold">FITLOG</h3>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <Link href="/my-plan" className="text-white text-sm flex items-center gap-1.5">
            Plan <span className="bg-[#C2F800] text-black px-2 py-0.5 rounded-full font-bold text-xs">{planCount}</span>
          </Link>
          <Link href="/my-plan" className="text-white text-sm flex items-center gap-1.5">
            Saved <span className="bg-white text-black px-2 py-0.5 rounded-full font-bold text-xs">{savedCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;