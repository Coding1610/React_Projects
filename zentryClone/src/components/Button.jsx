import React from 'react'

export default function Button({title,containerClass,leftIcon,rightIcon,id}) {
    return (
    <>
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black bg-violet-50 ${containerClass}`}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden font-general text-xs uppercase'>
            <div>
                {title}
            </div>
        </span>
        {rightIcon}
    </button>
    </>
    )
}