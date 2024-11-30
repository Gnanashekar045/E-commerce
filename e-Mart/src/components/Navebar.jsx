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
            </div>
        </div>
        {/* LowerNaveBar */}
        <div></div>
    </div>
  )
}

export default Navebar