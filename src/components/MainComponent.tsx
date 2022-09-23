import React from 'react'
import Cards from '../components/Cards'



const MainComponent = () => {
    return (
        <>
            <div className='bg-white text-black'>
                <div className='h-screen flex flex-wrap items-center justify-center' >
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default MainComponent