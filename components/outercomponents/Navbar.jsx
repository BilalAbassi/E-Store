"use client"
import React from 'react'
import { useState } from "react";




import {IoIosArrowDown} from "react-icons/io"
import Link from 'next/link';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);  
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6,setOpen6]=useState(false)


  return (
    <div className='  bg-[#F1EFF0] hidden xl:block 2xl:justify-center 2xl:flex    ' >



<ul className='  flex   text-gray-600  font-[Rubik] font-bold  text-[13px] ml-20 2xl:ml-8 gap-[6px] 2xl:gap-0 '>
  {/* 1 */}
  <li className='p-[10px] cursor-pointer hover:bg-white'  onMouseEnter={()=>{setOpen(true)}}

onMouseLeave={()=>setOpen(false)} >
    
       {/*start*/}
        <div  className="relative" >
       <button
          onMouseEnter={()=>{setOpen(true)}}


           className="flex "
         >
           <span className="   flex items-center  "> MEDICAL EQUIPMENTS <IoIosArrowDown/></span>
         </button>
         <ul
           className={`absolute    left-0 w-44  
              transition delay-300
             shadow-2xl items-center text-black z-50 bg-white ${
             open ? "block" : "hidden"
           }`}
           onMouseLeave={() => setOpen(false)}
           onMouseEnter={()=>{setOpen(true)}}

         >
          

         <Link href="/">
         <li className="flex w-full items-center px-2 py-2   transition ease-in-out delay-150
             cursor-pointer
             border-b  font-normal  hover:bg-gray-300   lg:text-[11px]  hover:border-b-blue-600 ">
             EQUIPMENTS
           </li></Link>
           <li className="flex w-full items-center px-2 py-2  
           
   font-normal   lg:text-[11px] transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600 ">
             FURNITURE
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600">
             MEDICAL DEVICES 
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   border-b transition ease-in-out delay-150  hover:bg-gray-300  hover:border-b-blue-600   ">
             PULSEOXIMETER
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300   hover:border-b-blue-600">
             STHETHOSCOPE
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300  hover:border-b-blue-600 ">
             AUDIOMETER
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:border-b-blue-600 hover:bg-gray-300 ">
             BP APPARTUS
           </li>

           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b-8 border-b-blue-600  hover:bg-gray-300  ">
             NEBULIZER MACHINE
           </li>












           
           



           
         </ul>
       </div>

 {/*End*/}
    
  </li>
  {/* 2 */}
  <li className='hover:bg-white p-[10px] cursor-pointer'  onMouseEnter={()=>{setOpen1(true)}}

onMouseLeave={()=>setOpen1(false)}
>
      
            {/*start*/}
            <div  className="relative" >
       <button
                  onMouseEnter={()=>{setOpen1(true)}}



           className="flex "
         >
           <span className="   flex items-center  "> DENTAL  <IoIosArrowDown/></span>
         </button>
         <ul
           className={`absolute    left-0 w-[190px] 
             transition delay-300
             shadow-2xl items-center text-black z-50 bg-white ${
             open1 ? "block" : "hidden"
           }`}
           onMouseLeave={() => setOpen1(false)}
           onMouseEnter={()=>setOpen1(true)}


         >
          

         <Link href="/">
         <li className="flex w-full items-center px-2 py-2   transition ease-in-out delay-150
             cursor-pointer
             border-b  font-normal  hover:bg-gray-300   lg:text-[11px]  hover:border-b-blue-600 ">
              ORAL HYGIENE / WHITENING
           </li></Link>
           <li className="flex w-full items-center px-2 py-2  
           
   font-normal   lg:text-[11px] transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600 ">
             IMPLANT
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600">
             IMPRESSIONS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   border-b transition ease-in-out delay-150  hover:bg-gray-300  hover:border-b-blue-600   ">
             DENTAL INSTRUMENTS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300   hover:border-b-blue-600">
             STHETHOSCOPE
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300  hover:border-b-blue-600 ">
             AUDIOMETER
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:border-b-blue-600 hover:bg-gray-300 ">
             BP APPARTUS
           </li>

           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b-8 border-b-blue-600  hover:bg-gray-300  ">
             NEBULIZER MACHINE
           </li>












           
           



           
         </ul>
       </div>

 {/*End*/}
       
  </li>
  {/* 3  */}
   <li className='hover:bg-white p-[10px] cursor-pointer'     onMouseEnter={()=>{setOpen2(true)}}

onMouseLeave={()=>setOpen2(false)}>
     <div  className="relative" >
       <button
                    onMouseEnter={()=>{setOpen2(true)}}

 
           className="flex "
         >
           <span className="   flex items-center  "> HYGIENE AND DISINFECTIONS   <IoIosArrowDown/></span>
         </button>
         <ul
           className={`absolute    left-0 w-[190px] 
              transition delay-300
             shadow-2xl items-center text-black z-50 bg-white ${
             open2 ? "block" : "hidden"
           }`}
           onMouseLeave={() => setOpen2(false)}
           onMouseEnter={()=>setOpen2(true)}


         >
          
         <Link href="/">
         <li className="flex w-full items-center px-2 py-2   transition ease-in-out delay-150
             cursor-pointer
             border-b  font-normal  hover:bg-gray-300   lg:text-[11px]  hover:border-b-blue-600 ">
              ORAL HYGIENE / WHITENING
           </li></Link>
           <li className="flex w-full items-center px-2 py-2  
           
   font-normal   lg:text-[11px] transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600 ">
             IMPLANT
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600">
             IMPRESSIONS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   border-b transition ease-in-out delay-150  hover:bg-gray-300  hover:border-b-blue-600   ">
             DENTAL INSTRUMENTS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300   hover:border-b-blue-600">
             STHETHOSCOPE
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300  hover:border-b-blue-600 ">
             AUDIOMETER
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:border-b-blue-600 hover:bg-gray-300 ">
             BP APPARTUS
           </li>

           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b-8 border-b-blue-600  hover:bg-gray-300  ">
             NEBULIZER MACHINE
           </li>
           
         </ul>
       </div>

 
  </li> 
  {/* 4 */}
   <li className='hover:bg-white p-[10px] cursor-pointer'   onMouseEnter={()=>{setOpen3(true)}}

onMouseLeave={()=>setOpen3(false)}
>
    
    <div  className="relative" >
       <button
       
       onMouseEnter={()=>{setOpen3(true)}}

 
        
           className="flex "
         >
           <span className="   flex items-center  "> WOUNDCARE    <IoIosArrowDown/></span>
         </button>
         <ul
           className={`absolute    left-0 w-[190px] 
           transition delay-300
             shadow-2xl items-center text-black z-50 bg-white ${
             open3 ? "block" : "hidden"
           }`}
           onMouseLeave={() => setOpen3(false)}
           onMouseEnter={()=>{setOpen3(true)}}
          
 

         >
          
         <Link href="/">
         <li className="flex w-full items-center px-2 py-2   transition ease-in-out delay-150
             cursor-pointer
             border-b  font-normal  hover:bg-gray-300   lg:text-[11px]  hover:border-b-blue-600 ">
              ORAL HYGIENE / WHITENING
           </li></Link>
           <li className="flex w-full items-center px-2 py-2  
           
   font-normal   lg:text-[11px] transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600 ">
             IMPLANT
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600">
             IMPRESSIONS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   border-b transition ease-in-out delay-150  hover:bg-gray-300  hover:border-b-blue-600   ">
             DENTAL INSTRUMENTS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300   hover:border-b-blue-600">
             STHETHOSCOPE
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300  hover:border-b-blue-600 ">
             AUDIOMETER
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:border-b-blue-600 hover:bg-gray-300 ">
             BP APPARTUS
           </li>

           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b-8 border-b-blue-600  hover:bg-gray-300  ">
             NEBULIZER MACHINE
           </li>
           
         </ul>
       </div>

  </li> 
  {/* 5  */}

   <li className='hover:bg-white p-[10px] cursor-pointer'  onMouseEnter={()=>{setOpen4(true)}}
        onMouseLeave={()=>setOpen4(false)}>
 
<div  className="relative" >
       <button
        
        onMouseEnter={()=>{setOpen4(true)}}

           className="flex "
         >
           <span className="   flex items-center  "> NURSING   <IoIosArrowDown/></span>
         </button>
         <ul
           className={`absolute    left-0 w-[190px] 
           transition delay-300
             shadow-2xl items-center text-black z-50 bg-white ${
             open4 ? "block" : "hidden"
           }`}
           onMouseLeave={() => setOpen4(false)}
           onMouseEnter={() => setOpen4(true)}



         >
          
         <Link href="/">
         <li className="flex w-full items-center px-2 py-2   transition ease-in-out delay-150
             cursor-pointer
             border-b  font-normal  hover:bg-gray-300   lg:text-[11px]  hover:border-b-blue-600 ">
              ORAL HYGIENE / WHITENING
           </li></Link>
           <li className="flex w-full items-center px-2 py-2  
           
   font-normal   lg:text-[11px] transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600 ">
             IMPLANT
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600">
             IMPRESSIONS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   border-b transition ease-in-out delay-150  hover:bg-gray-300  hover:border-b-blue-600   ">
             DENTAL INSTRUMENTS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300   hover:border-b-blue-600">
             STHETHOSCOPE
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300  hover:border-b-blue-600 ">
             AUDIOMETER
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:border-b-blue-600 hover:bg-gray-300 ">
             BP APPARTUS
           </li>

           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b-8 border-b-blue-600  hover:bg-gray-300  ">
             NEBULIZER MACHINE
           </li>
           
         </ul>
       </div>

  </li>
{/* 6 */}
  <li className='hover:bg-white p-[10px] cursor-pointer'  
        onMouseEnter={()=>{setOpen5(true)}}
        onMouseLeave={()=>setOpen5(false)}
>
   
    <div  className="relative" >
       <button
        
        onMouseEnter={()=>{setOpen5(true)}}

           className="flex "
         >
           <span className="   flex items-center  "> EMERGENCY   <IoIosArrowDown/></span>
         </button>
         <ul
           className={`absolute    left-0 w-[190px] 
           transition delay-300
             shadow-2xl items-center text-black z-50 bg-white ${
             open5 ? "block" : "hidden"
           }`}
           onMouseLeave={() => setOpen5(false)}
           onMouseEnter={() => setOpen5(true)}



         >
          
         <Link href="/">
         <li className="flex w-full items-center px-2 py-2   transition ease-in-out delay-150
             cursor-pointer
             border-b  font-normal  hover:bg-gray-300   lg:text-[11px]  hover:border-b-blue-600 ">
              ORAL HYGIENE / WHITENING
           </li></Link>
           <li className="flex w-full items-center px-2 py-2  
           
   font-normal   lg:text-[11px] transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600 ">
             IMPLANT
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600">
             IMPRESSIONS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   border-b transition ease-in-out delay-150  hover:bg-gray-300  hover:border-b-blue-600   ">
             DENTAL INSTRUMENTS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300   hover:border-b-blue-600">
             STHETHOSCOPE
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300  hover:border-b-blue-600 ">
             AUDIOMETER
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:border-b-blue-600 hover:bg-gray-300 ">
             BP APPARTUS
           </li>

           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b-8 border-b-blue-600  hover:bg-gray-300  ">
             NEBULIZER MACHINE
           </li>
           
         </ul>
       </div>


  </li>
{/* 7 */}
  <li className='hover:bg-white p-[10px] cursor-pointer'   onMouseEnter={()=>{setOpen6(true)}}
        onMouseLeave={()=>setOpen6(false)}
>
    <div  className="relative" >
       <button
        
        onMouseEnter={()=>{setOpen6(true)}}

           className="flex "
         >
           <span className="   flex items-center  "> REHABILITATION   <IoIosArrowDown/></span>
         </button>
         <ul
           className={`absolute    left-0 w-[190px] 
           transition delay-300
             shadow-2xl items-center text-black z-50 bg-white ${
             open6 ? "block" : "hidden"
           }`}
           onMouseLeave={() => setOpen6(false)}
           onMouseEnter={() => setOpen6(true)}

         >
          
         <Link href="/">
         <li className="flex w-full items-center px-2 py-2   transition ease-in-out delay-150
             cursor-pointer
             border-b  font-normal  hover:bg-gray-300   lg:text-[11px]  hover:border-b-blue-600 ">
              ORAL HYGIENE / WHITENING
           </li></Link>
           <li className="flex w-full items-center px-2 py-2  
           
   font-normal   lg:text-[11px] transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600 ">
             IMPLANT
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150  hover:bg-gray-300 border-b  hover:border-b-blue-600">
             IMPRESSIONS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   border-b transition ease-in-out delay-150  hover:bg-gray-300  hover:border-b-blue-600   ">
             DENTAL INSTRUMENTS
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300   hover:border-b-blue-600">
             STHETHOSCOPE
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:bg-gray-300  hover:border-b-blue-600 ">
             AUDIOMETER
           </li>
           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b hover:border-b-blue-600 hover:bg-gray-300 ">
             BP APPARTUS
           </li>

           <li className="flex w-full items-center px-2 py-2 
           font-normal   lg:text-[11px]   transition ease-in-out delay-150 border-b-8 border-b-blue-600  hover:bg-gray-300  ">
             NEBULIZER MACHINE
           </li>
           
         </ul>
       </div>

  </li>
{/* 8 */}
  <li className=' p-[10px] cursor-pointer'>
    <p>ALL PRODUCTS
</p>
  </li>
  {/* 9 */}

  <li className='p-[10px] 2xl:px-2 bg-orange-300 animate-pulse hover:text-black cursor-pointer px-4 '>
    <p className='text-red-500'>DEALS
</p>
  </li>

</ul>

    </div>
  )
}

export default Navbar