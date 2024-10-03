'use client'

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">GitConnect</Link>
        <button onClick={toggleMenu} className="text-white md:hidden">
          ☰
        </button>
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
          <Link href="/" className="text-white px-4">Home</Link>
          <Link href="/developers" className="text-white px-4">Developers</Link>
          <Link href="/createpost" className="text-white px-4">Create Post</Link>
             <Link href="/profile" className="text-white px-4">Profile</Link>
            
              <Link href="/signup" className="text-white px-4">Sign Up</Link>
              <Link href="/signin" className="text-white px-4">Sign In</Link>
            
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;