import React from 'react'
import Logo from "../assets/Logo.png"

const Navebar = () => {
  return (
    <div>
        {/* UpperNavBar */}
        <div>
            <div>
                <div>
                    <a href="#">
                        <img src={Logo} alt="Logo" />
                    </a>
                </div>
                {/* search bar and order button */}
                <div>
                    <div>
                        <input type="text" placeholder='search' className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary />
                    </div>
                </div>
            </div>
        </div>
        {/* LowerNaveBar */}
        <div></div>
    </div>
  )
}

export default Navebar