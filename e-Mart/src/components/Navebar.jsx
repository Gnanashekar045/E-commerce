import React from 'react'
import Logo from "../assets/Logo.png" 
//Commerce site info create 

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
                    <div >
                        <input type="text" placeholder='search' />
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