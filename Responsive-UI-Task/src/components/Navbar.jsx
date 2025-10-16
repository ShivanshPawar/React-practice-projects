import React from 'react'
import { Building2, TextAlignJustify } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='w-full py-5 flex justify-between items-center'>
            <h1 className='flex items-center gap-1.5 font-extrabold text-sm'>
                <Building2 color="#000000" strokeWidth={2} size={35} />
                Construct Impact
            </h1>
            <TextAlignJustify size={28} color="black" strokeWidth={2} />
        </div>
    )
}

export default Navbar