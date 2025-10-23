import React from 'react'
import { TextAlignJustify } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {


    return (

        <div className='w-full py-5 flex justify-between items-center'>
            {/*Logo*/}
            <Logo />

            {/*Navbar Mobile first design with hamburger menu for smaller screens*/}
            <TextAlignJustify className='lg:hidden' size={28} color="black" strokeWidth={2} />

            {/*Navbar for Desktop View*/}
            <div className='hidden lg:flex w-[50%] justify-between items-center'>
                <h5 id='nav'>Home</h5>
                <h5 id='nav'>About</h5>
                <h5 id='nav'>Service</h5>
                <h5 id='nav'>Work</h5>
                <h5 id='nav'>Contact</h5>
            </div>
        </div>
    )
}

export default Navbar