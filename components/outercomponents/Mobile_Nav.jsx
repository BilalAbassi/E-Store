import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import {FiSearch} from "react-icons/fi"

const Mobile_Nav = () => {
  return (
    <div className=' xl:hidden   bg-gradient-to-l from-[#60469B] to-[#3B388E]  '  >

{/* 1 */}
<div className='grid grid-cols-8  p-4    '>

<div><GiHamburgerMenu className='text-white text-[28px]'/></div>
{/* 2 */}

<div className=' flex justify-between col-span-7	'>


<img src='./log.png' className='w-[100px] h-[30px]'/>

  <img src='cart.png' className='w-[40px] h-[40px]	'/>


</div>







</div>
{/* Search */}
<div className='  bg-gradient-to-l from-[#60469B] to-[#3B388E] pb-[16px] px-4 ' >
<div className=' flex items-center bg-white  rounded-md'>

<input placeholder='Search' type="text" className='w-full rounded-md outline-none py-[6px]'/>

<FiSearch className='text-xl mr-4'/>

</div>



</div>





    </div>
  )
}

export default Mobile_Nav