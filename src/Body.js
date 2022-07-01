import React from 'react'
import './Body.css'

function Body(){
    return(
        <div className='Body'>
            <div className='Body_left'>

                <div className='li_1'>
                <h3>Department</h3>
                    <span><a href=''>＜ Make up </a></span><br/>
                    <span><a href=''>＜ Skin Care </a></span><br/>
                    <span><a href=''>＜ Hair Care </a></span><br/>
                    <span><a href=''>＜ Fragrance </a></span>
                    <span><a href=''>＜ Foot,Hand & Nail Care </a></span>
                    <span><a href=''>＜ Tools & Accessories</a></span>
                    <span><a href=''>＜ Shave & Hair Removal</a></span>
                    <span><a href=''>＜ Personal Care</a></span>
                    <span><a href=''>＜ Salon & Spa Equipment</a></span>
                </div>

                <div className='li_2'>
                <h3>Premium Beauty</h3>
                <p><input type={'checkbox'}></input>Premium Selection</p>
                </div>
                <div className='li_3'>
                    
                </div>
            </div>
            <div className='Body_right'>

            </div>
        </div>
    )
}
export default Body;