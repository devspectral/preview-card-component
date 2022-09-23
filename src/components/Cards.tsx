import React from 'react'
import Buttons from './ButtonComponent'
import data from '../data.json'
import icon1 from '../assets/images/icon-sedans.svg'
import icon2 from '../assets/images/icon-suvs.svg'
import icon3 from '../assets/images/icon-luxury.svg'

const Cards = () => {
    return (<>
        <div className='justify-center items-center p-4'>
            <div className='my-8 flex lg:flex-row flex-col'>
                <div className='h-[32rem] w-[28rem] bg-[#e38826]'>
                    {/* icon */}
                    <div><img src={icon1} alt="Logo" /></div>
                    {/* title */}
                    <div>{data.Card1.title}</div>
                    {/* subtitle */}
                    <div>{data.Card1.subtitle}</div>
                    {/* Button */}
                    <div>
                        <Buttons btnColor={"text-[#e38826]"} />
                    </div>
                </div>
                <div className='h-[32rem] w-[28rem] bg-[#006970]'>
                    {/* icon */}
                    <div><img src={icon2} alt="Logo" /></div>
                    {/* title */}
                    <div>{data.Card2.title}</div>
                    {/* subtitle */}
                    <div>{data.Card2.subtitle}</div>
                    {/* Button */}
                    <div>
                        <Buttons btnColor={"text-[#006970]"} />
                    </div>
                </div>
                <div className='h-[32rem] w-[28rem] bg-[#004241]'>
                    {/* icon */}
                    <div><img src={icon3} alt="Logo" /></div>
                    {/* title */}
                    <div>{data.Card3.title}</div>
                    {/* subtitle */}
                    <div>{data.Card3.subtitle}</div>
                    {/* Button */}
                    <div>
                        <Buttons btnColor={"text-[#004241]"} />
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    </>
    )
}

export default Cards