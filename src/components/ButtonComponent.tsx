import React from 'react'

interface Props {
    btnColor: string
}

const Button = ({ btnColor }: Props) => {
    return (
        <>
            <button className={`${btnColor} hover:bg-gray-400 transition w-36 bg-white font-bold py-2 px-4 rounded-full`}>
                Learn More
            </button>
        </>
    )
}

export default Button