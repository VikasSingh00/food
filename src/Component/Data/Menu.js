import React from "react";
import './Menu.css'
// ... rest of your imports

const Menu = ({ items }) => {
    return (
      <main>
        <div className="Container">
          <div className="row">
            {items.map((item) => {
              const { id, img, price, desc, title } = item;
              return (
                <div key={id} className="col-6">
                  <div className="main-div">
                    <div className="im">
                      <img src={img} alt={`Image for ${title}`} />
                    </div>
                    <div className="price">
                      <h4>{title}</h4>
                      <h5>{price}</h5>
                    </div>
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  };
  

  

export default Menu