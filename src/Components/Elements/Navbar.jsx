import React from 'react'
import Logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className="bg-[#E4632F]">
        <div className="container mx-auto flex justify-between items-center px-16">
            <img src={Logo} alt="" className="w-[15vh] h-[15vh]"/>
            <ul className='flex gap-6'>
                <li>Work</li>
                <li>About</li>
                <li>Services</li>
                <li className='bg-white '>Ideas</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar