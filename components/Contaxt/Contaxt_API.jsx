"use client"

import React, { createContext,useState  } from 'react';

export const MyContext = createContext();


const MyProvider = (props) => {
  const data={

    p_img:"Card_img.png",
    p_name:" AQUA BABY WIPES 64 WIPES/PACK" ,
    p_cat:     "NURSING MATERIAL",

    stock : true ,
    p_price: 200.18,




  }


  return (
    <MyContext.Provider value={data}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyProvider;

