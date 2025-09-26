import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Banner from "./images/banner.png";
import Polygon from "./images/polygon.png";
import Button from './Button';

const Landing = () => {
    const socialIcons = [ <IoLogoLinkedin/>,<FaFacebook/>,<FaInstagram/>,<BsTwitterX/>,]
    return (
        <>
            <section className='landing-page w-full h-screen '>
                <div className='flex justify-between items-center pt-30'>
                    {/* left side */}
                    <div className=''>
                        <div className='mb-15'>
                            <span className='text-4xl font-semibold  leading-20 '>Hello it's Me</span>
                        <h1 className='text-6xl font-bold  leading-20'>Md. Maruf Hossen</h1>
                        <span className='text-3xl font-semibold  leading-20 capitalize'>and i'm <span className='text-[#0080FF]'>a</span> front-end developer</span>
                        <p className='mb-6 text-lg font-normal'>Vero praesentium libero rerum est repellendus. Mollitia et ipsam <br /> qui at ut magnam enim.</p>
                        <div className='flex  items-center gap-8'>
                            {socialIcons.map((items,index)=>(
                                <a href="" className='text-[#0080FF] text-2xl'> {items}</a>
                            ))}
                            
                        </div>
                        </div>
                        <Button text="Download CV" />
                    </div>
                    {/* right side */}
                    <div className='relative'>
                        <div className='absolute z-20 bottom-25'>
                        <img src={Banner} alt="banner" />

                        </div>
                        <div className=''>

                        <img src={Polygon} alt="polygon" />
                        </div>
                    </div>

                </div>


            </section>

        </>
    )
}

export default Landing
