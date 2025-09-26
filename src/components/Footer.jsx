import React from 'react'
import Button from './Button'

export default function Footer() {
    return (
        <div className='h-screen '>
            <div className='contact'>
                <h1 className='text-5xl capitalize text-center font-semibold'>contact <span className='text-[#0080FF]'>me?</span></h1>
            </div>
           <div className='flex  justify-center items-center w-full'>
             <div className='form mt-50  '>
                <div className='flex gap-20 my-8 text-4xl ' >
                    <input className='outline-none px-6 py-4 w-1/2 h-20 bg-[#1E1E1E] rounded-xl' type="text" name="" placeholder='First Name' id="" />
                    <input className='outline-none px-6 py-4 w-1/2 h-20 bg-[#1E1E1E] rounded-xl' type="text" name="" placeholder='Last Name' id="" />
                </div>
                <div>
                    <div className=' text-4xl outline-none  '>
                        <input className='outline-none px-6 py-4 w-full my-10 h-20 bg-[#1E1E1E] rounded-xl' type="email" name="" placeholder='Email' id="" />
                        <textarea className='capitalize outline-none px-6 py-4 w-full bg-[#1E1E1E] rounded-xl' placeholder='comment' rows={7} ></textarea>
                    </div>
                    <div className='flex justify-center items-center py-5'>
                        <Button text="Send"/>
                    </div>
                </div>

            </div>
           </div>

        </div>
    )
}
