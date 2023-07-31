import { Link } from "react-router-dom";
import React from 'react';






const Navbar = () => {
    return (
        <nav id="navbar" className='bg-rose-700 m-0 h-4 z-40 w-full fixed top-0 py-6'>
            <div className="bg-rose-700 flex items-center justify-between">
                <h4 className="text-3xl font-bold px-8">TK</h4>
                <div className="flex items-center px-2">
                    <Link to='/' className='px-2'>About</Link>
                    <Link to='/skills' className='px-2'>Skills</Link>
                    <Link to='/projects' className='px-2'>Projects</Link>
                    <Link to='/contact' className='px-2'>Contact</Link>
                    <a href="#" className="p-2">Resume</a>
                </div>
            </div>
        </nav>
    )
};
export default Navbar;
