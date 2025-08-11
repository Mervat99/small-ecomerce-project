import React from 'react'
import './Colors.css'
import Input from '../../components/Input.jsx'
const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2> 
      <div className="sidebar-items">
          <Input type="radio" id="all" name="test2" title="All" value=""   onChange={handleChange}/>
          <Input type="radio" id="c1" name="test2" title="Black" value="black" color="black"  onChange={handleChange} />
          <Input type="radio" id="c2" name="test2" title="Red" value="red" color="red"   onChange={handleChange}/>
          <Input type="radio" id="c3" name="test2" title="Green" value="green" color="green"  onChange={handleChange} />
          <Input type="radio" id="c4" name="test2" title="Blue" value="blue" color="blue"  onChange={handleChange} />
      </div>
     
       {/* <label htmlFor="all3" className="sidebar-label-container">
          <input type="radio" id="all3" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">All</span>
        </label>

         <label htmlFor="c1" className="sidebar-label-container">
          <input type="radio" id="c1" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">Black</span>
        </label>

         <label htmlFor="c2" className="sidebar-label-container">
          <input type="radio" id="c2" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">Blue</span>
        </label>

        <label htmlFor="c3" className="sidebar-label-container">
          <input type="radio" id="c3" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">Red</span>
        </label>

         <label htmlFor="c4" className="sidebar-label-container">
          <input type="radio" id="c4" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">Green</span>
        </label>

         <label htmlFor="c5" className="sidebar-label-container">
          <input type="radio" id="c5" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">White</span>
        </label> */}
    </div>
  )
}

export default Colors