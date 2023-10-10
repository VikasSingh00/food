//import 'bootstrap/dist/css/bootstrap.min.css'
"use client"
import Categories from '@/Component/Data/Categories'
import Menu from '@/Component/Data/Menu'
import items from '@/Component/Data/Data.js'
import { useState } from 'react'

const allCategories= ['all',...new Set(items.map((item)=>item.category))];
export default function Home() {
    const [menuitem,setMenuitem]=useState(items);
     const[categories,setCategories]=useState(allCategories);
     
     const filteritem =(category)=>{
      if(category==="all"){
        return setMenuitem(items)
      }else{
      const newItems=items.filter((item)=>item.category === category)
      return setMenuitem(newItems);
      }
     }

  return (
    <div className='Container'>
     <Categories filteritem={filteritem} categories={categories}/>
    <Menu items={menuitem}/>
      
    </div>
  )
}
