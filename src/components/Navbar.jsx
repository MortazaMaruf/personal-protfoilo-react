import React from 'react'

const Navbar = () => {
    const menuItems =["home","about","skills","education","contact"];
  return (
    <>
    <header className=''>
    <nav className=' text-white '>
      <div className='flex justify-between items-center p-3'>
          <div>
            <h1 className='tracking-[18px] text-4xl font-semibold'>FA</h1>
        </div>
        <div className=' flex justify-center items-center gap-20 capitalize'>
            {menuItems.map((item,index)=>(
               <a key={index} href="" className='text-lg'>{item}</a> 
            ))}
        </div>
      </div>
    </nav>
    </header>
      
    </>
  )
}

export default Navbar
