import React from 'react'
import logo from '../img/Logo.svg'
import './rightLeft.css'

const LeftBar = () => {
  return (
    <>
        <div className="header_logo_left">
            <div className="header_logo_img">
                <span className='header_logo_img_icon'><img src={logo} alt="" /></span>
                <span className='header_logo_img_txt'>JioSaavn</span>
            </div>
            <div className="header_menu">
                <ul className='header_manu_ul'>
                    <li className="header_menu_list"><a href="#!" className='header_manu_links' >Music</a></li>
                    <li className="header_menu_list"><a href='#!' className='header_manu_links' >Podcasts</a></li>
                    <li className="header_menu_list"><a href='#!' className='header_manu_links' >Go Pro</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default LeftBar