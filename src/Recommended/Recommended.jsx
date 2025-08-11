import React from "react";
import "./Recommended.css";
import Buttons from "../components/Buttons.jsx";
const Recommended = ({handleClick}) => {
  return (
    <>
      <div>
        <h2 className='recommended-title'>Recommended</h2>
        <div className='recommended-flex'>
          
          
          <Buttons  onClickHandler={handleClick}   title="All Products" />
          <Buttons  onClickHandler={handleClick}  value="Nike" title="Nike" />
          <Buttons  onClickHandler={handleClick}  value="Adidas" title="Adidas" />
          
          <Buttons  onClickHandler={handleClick}  value="Puma" title="Puma" />
          <Buttons  onClickHandler={handleClick}  value="Vans" title="Vans" />

          {/* <button className="btns">Nike</button>
          <button className="btns">Adidas</button>
          <button className="btns">Puma</button>
          <button className="btns">Vans</button> */}
        </div>
      </div>
    </>
  );
};

export default Recommended;
