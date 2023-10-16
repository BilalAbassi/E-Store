"use client"
import Image from 'next/image'
import React,{useContext} from 'react'
import {AiFillCheckCircle} from "react-icons/ai"
import {PiWarningCircleBold} from "react-icons/pi"
import { MyContext } from '../Contaxt/Contaxt_API'


const Home_Card = () => {

  const data = useContext(MyContext);

  return (
    <div className='bg-white border-2 b  xl:mx-10 shadow hover:shadow-2xl hover:shadow-blue-600 hover:scale-105 my-10 '>
      <div className='border-b'>

      <Image src={`/${data?.p_img}`} width={180} height={200} alt='product-image' className=' h-[199px] w-[80%] 
      delay-100
 ' />
      </div>

<div className='p-2'>
<h5 className='text-[14.48px] font-[700]'>{data?.p_name}</h5>
<p className='text-[10px]'>{data?.p_cat}</p>

{data?.stock ? (<div className='flex items-center gap-2'>
    <AiFillCheckCircle className='text-green-600'/>
    <p className='text-green-600 '>In stock</p>
</div>) :(<div className='flex items-center gap-2'>
    <PiWarningCircleBold className='text-red-600'/>
    <p className='text-red-600 '>No stock</p>
   
</div>)}
<h3 className='text-green-600 text-[18px] font-[600]'>AED {data?.p_price}</h3>
<button className='bg-[#5A569F] py-2 w-full text-white font-[700]'>BUY NOW </button>

</div>





    </div>



// AQUA BABY WIPES 64 WIPES/PACK
// NURSING MATERIALIn stock
  )
}

export default Home_Card