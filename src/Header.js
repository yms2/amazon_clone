import React from 'react'
import './Header.css'

function Header() {
    return(
        <div  className='header'>
            <img
            className='header_logo'
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"/>

            <div className='add'>
                <ul>
                    <li className='add1'>Deliver to</li>
                    <li className='add2'>Republic of Korea</li>
                </ul>
            </div>
            <div className='header_search'>
                <input className='header_searchInput' type='text'/>
                <img className='search_logo'/>
            </div>

            <div className='header_nav'>

                <div className='header_option'>
                    <span className='header_optionLineOne'>Hello,sign in<br/></span>
                    <span className='header_optionLineTwo'>Account & Lists</span>

                </div>
                <div className='header_option'>
                    <span className='header_optionLineOne'>Returns<br/></span>
                    <span className='header_optionLineTwo'>& orders</span>


                </div>
            </div>
        </div>
    )
}

export default Header;