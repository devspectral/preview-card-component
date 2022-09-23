import React from 'react'
import Buttons from './ButtonComponent'
import data from '../data.json'
import icon1 from '../assets/images/icon-sedans.svg'
import icon2 from '../assets/images/icon-suvs.svg'
import icon3 from '../assets/images/icon-luxury.svg'

const Cards = () => {
    return (<>
        <div className='justify-center items-center p-4 text-gray-100 text-[15px]'>
            <div className='w-full m-2 flex lg:flex-row flex-col'>
                <div className='h-[32rem] w-[20rem] bg-[#e38826] p-10'>
                    {/* icon */}
                    <div className='my-4'><img src={icon1} alt="Logo" /></div>
                    {/* title */}
                    <div className='my-10'>{data.Card1.title}</div>
                    {/* subtitle */}
                    <div className='my-10'>{data.Card1.subtitle}</div>
                    {/* Button */}
                    <div className='mt-32'>
                        <Buttons btnColor={"text-[#e38826]"} />
                    </div>
                </div>
                <div className='h-[32rem] w-[20rem] bg-[#006970] p-10'>
                    {/* icon */}
                    <div className='my-4'><img src={icon2} alt="Logo" /></div>
                    {/* title */}
                    <div className='my-10'>{data.Card2.title}</div>
                    {/* subtitle */}
                    <div className='my-10'>{data.Card2.subtitle}</div>
                    {/* Button */}
                    <div className='mt-32'>
                        <Buttons btnColor={"text-[#006970]"} />
                    </div>
                </div>
                <div className='h-[32rem] w-[20rem] bg-[#004241] p-10'>
                    {/* icon */}
                    <div className='my-4'><img src={icon3} alt="Logo" /></div>
                    {/* title */}
                    <div className="my-10">{data.Card3.title}</div>
                    {/* subtitle */}
                    <div className='my-10'>{data.Card3.subtitle}</div>
                    {/* Button */}
                    <div className='mt-32'>
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