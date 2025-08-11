import React from "react";
import "./Category.css";
import Input from "../../components/Input.jsx";

const Category = ({ handleChange }) => {
  return (
    <>
      <h2 className="sidebar-title">Category</h2>
      <div className="sidebar-items">
  <Input
        onChange={handleChange}
        type="radio"
        title="All"
        value=""
        name="cat"
        id="all"
      />

      <Input
        onChange={handleChange}
        type="radio"
        title="Sneakers"
        value="Sneakers"
        name="cat"
        id="Sneakers"
      />

      <Input
        onChange={handleChange}
        type="radio"
        title="flats"
        value="flats"
        name="cat"
        id="flats"
      />

      <Input
        onChange={handleChange}
        type="radio"
        title="sandals"
        value="sandals"
        name="cat"
        id="sandals"
      />
      <Input
        onChange={handleChange}
        type="radio"
        title="Heels"
        value="heels"
        name="cat"
        id="heels"
      />
      </div>
    

      {/* <label htmlFor="sneakers" className="sidebar-label-container">
          <input type="radio" id="sneakers" name="test" />
          <span className="checkmark"></span>
          <span className="option-text">Sneakers</span>
        </label>

        <label htmlFor="flats" className="sidebar-label-container">
          <input type="radio" id="flats" name="test" />
          <span className="checkmark"></span>
          <span className="option-text">Flats</span>
        </label>

        <label htmlFor="sandals" className="sidebar-label-container">
          <input type="radio" id="sandals" name="test" />
          <span className="checkmark"></span>
          <span className="option-text">Sandals</span>
        </label>

        <label htmlFor="heels" className="sidebar-label-container">
          <input type="radio" id="heels" name="test" />
          <span className="checkmark"></span>
          <span className="option-text">Heels</span>
        </label> */}
    </>
  );
};

export default Category;
