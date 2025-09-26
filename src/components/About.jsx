import React from 'react'
import Banner from './images/banner.png'
import Rounded from './images/rouded.png'
import Button from './Button'
const About = () => {
    return (
        <>
            <div className='about h-screen flex justify-evenly items-center'>
                {/* left side */}
                <div className='relative ' >
                    <div className='absolute bottom-28 left-10'>
                        <img src={Banner} alt="" />
                    </div>
                    <div className=''>
                        <img src={Rounded} alt="" />
                    </div>

                </div>
                {/* right-side */}
                <div >
                    <h1 className='text-4xl font-semibold mb-3'>About <span className='text-[#0080FF]'>Me</span></h1>
                    <span className=' leading-3 text-xl capitalize tracking-wider'>front-end web developer</span>
                    <p className='my-10 text-md text-gray-300 leading-7'>Et blanditiis sit neque provident soluta quibusdam. Ut optio nobis. Eligendi voluptas <br /> qui maxime  id quo culpa qui. Nihil error necessitatibus distinctio explicabo et. <br />

                        Voluptas quas placeat. Quia aut aut vel  harum ullam eum. Nihil minima fugit fuga <br /> tempore eum aut consequatur. Dolores iusto minus ab soluta in temporibus fuga. <br />

                        Quaerat sit sequi temporibus voluptatem. Dolore aut rerum enim aut suscipit facere. Libero .</p>
                        <div>
                            <Button text={"see more"}/>
                        </div>

                </div>


            </div>

        </>
    )
}

export default About

