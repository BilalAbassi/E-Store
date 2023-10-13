import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiSearch} from "react-icons/fi"
const TopNav = () => {
  return (
 
 <div className=' max-w-[4000px]  bg-gradient-to-l from-[#60469B] to-[#3B388E]  container 2xl:flex 2xl:justify-center' >
<div className='xl:grid hidden  
 grid-cols-4 
  overflow-hidden  text-white items-center
 p-[10px]' >

    {/* 1  main */}
<Link href="/" className='ml-[38px]'>

<Image width={150} height={150}  src="/log.png" />

</Link>
{/* 2 main */}
<div className='col-span-2  text-black bg-white w-[600px] flex  shadow-xl items-center rounded-md'>

<input placeholder='Search' type="text" className='w-[600px] p-2  border-none rounded-md outline-none '/>

<FiSearch className='text-xl mr-4 text-gray-600'/>

</div>
{/* 3 main */}
<div className='flex gap-4 items-center justify-center '>
    {/* 1  */}
<div className='pr-4 '>
<p className='text-[11px] ml-1'>
    <Link href="/signup">
    
<span>Sign in </span>
    
    </Link>
/
<span> Sign up</span>

</p>
<h3 className='text-[16px] font-bold '> Your Account </h3>



</div>
{/* 2 */}
<div className='flex items-center  '>
    <span className='border-l text-purple-800 border-gray-500'>ddd</span>
    
    
    <Link href="/cart">
    
    
<Image height={100} width={50} src="/cart.png" />
    
    </Link>

<h3 className='text-[16px] font-bold'>CART</h3>



</div>


</div>





    </div>
    </div>
 
  )
}

export default TopNav