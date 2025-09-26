import React from 'react'
import Brush from './images/brush.png'
import Button from './Button'
const Skill = () => {
    return (
        <>
            <div className='h-screen'>
                <div className='flex justify-center items-start'>
                    <h1 className='text-5xl font-semibold capitalize '>my <span className='text-[#0080FF]'>skills</span></h1>
                </div>
              <div className='flex justify-center items-center'>
                  <div className=' flex flex-col justify-center  items-center my-30  bg-black/20 w-fit px-14 py-2 rounded-3xl '>
                    <div>
                        <img src={Brush} alt="" className='my-10' />
                    </div>
                    <div>
                        <span className='text-center leading-3 text-3xl capitalize tracking-wider'>front-end web developer</span>
                        <p  className=' my-10 text-lg text-gray-300 leading-7'>Et blanditiis sit neque provident soluta <br /> quibusdam. Ut optio nobis. Eligendi <br /> voluptas qui maxime id quo culpa qui. <br /> Nihil error necessitatibus distinctio <br /> explicabo et. <br />

                            Voluptas quas placeat. Quia aut aut vel <br /> harum ullam eum. Nihil minima fugit fuga </p>
                            <div className='pt-1 pb-15 flex justify-center items-center'>
                                <Button text={"read me"}/>
                            </div>
                    </div>

                </div>
              </div>

            </div>

        </>
    )
}

export default Skill
