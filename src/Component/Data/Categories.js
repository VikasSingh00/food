import React from "react";
import './Menu.css'

const Categories =({filteritem,categories})=>{
    return(
       <div>
          <div>
            <div>
             <div className="btn">
             {categories.map((category, index) => (
             <button key={index} onClick={() => filteritem(category)}>
               {category}
             </button>
             ))}
            </div>
           
        
            </div>
        </div>
       </div>
    )
}
export default Categories
