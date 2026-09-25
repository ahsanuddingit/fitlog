import React from 'react';
import Image from 'next/image';
import Logo from '../app/assets/logo.png'; 

const Footer = () => {
    return (
        <div className='container mx-auto'>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <Image src={Logo} alt="Logo" width={32} height={32} className="h-8 w-8" />
                    <h1 className='font-bold text-lg'>FITLOG</h1>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">

                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;