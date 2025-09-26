import React from 'react'
import ProjectOne from './images/projectOne.png'
import ProjectTwo from './images/projectTwo.png'
import ProjectThree from './images/projectThree.png'
import projectBg from './images/ProjectsBg.png'
import Card from './Card'

const Work = () => {
    const cards =[
        {image:ProjectOne },
        {image:ProjectTwo},
        {image: ProjectThree},
    ];
    const workMenu =["all","UI","UX","web design"]
  return (
    <div className='h-[90vh]'>
        <div>
            <h1 className='text-[4vw] font-bold' >My recent <span className='text-[#0080FF]'>work</span></h1>
            <div className='flex gap-15 items-center'>
                {workMenu.map((items,index)=>(
                    <span className='my-5 px-8 py-3 bg-zinc-400/40 rounded-full capitalize font-semibold text-md '>{items}</span>
                ))}

            </div>
        </div>
        <div className='flex justify-between  items-center flex-wrap mt-10'>
           {cards.map((card,index)=>(
               < Card
               key={index}
               image={card.image}
               />

           )) }
        </div>

      
    </div>
  )
}

export default Work
