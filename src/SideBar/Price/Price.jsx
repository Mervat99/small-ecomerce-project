import React from 'react'

import '../Price/Price.css'
import Input from '../../components/Input.jsx'

const Price = ({ handleChange }) => {
  return (
    <div className='ml'>
      <h2 className="sidebar-title price-title">Price</h2> 
      <div className="sidebar-items">
        <Input type="radio" onChange={handleChange} value=""  title="All" id="all" name="p" />
        <Input type="radio" onChange={handleChange}value="50"  title="$0-$50" id="p1" name="p" />
        <Input type="radio"onChange={handleChange}value="100"  title="$50-$100" id="p2" name="p" />
        <Input type="radio" onChange={handleChange} value="150" title="$100-$150" id="p3" name="p" />
        <Input type="radio" onChange={handleChange} value="200" title="$150-$200" id="p4" name="p" />
        </div>
       {/* <label htmlFor="all2" className="sidebar-label-container">
          <input type="radio" id="all2" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">All</span>
        </label> */}
         {/* <label htmlFor="a1" className="sidebar-label-container">
          <input type="radio" id="a1" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">$0-$50</span>
        </label>
         <label htmlFor="a2" className="sidebar-label-container">
          <input type="radio" id="a2" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">$50-$100</span>
        </label>
         <label htmlFor="a3" className="sidebar-label-container">
          <input type="radio" id="a3" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">$100-$150</span>
        </label>
         <label htmlFor="a4" className="sidebar-label-container">
          <input type="radio" id="a4" name="test2" />
          <span className="checkmark"></span>
          <span className="option-text">$150-$200</span>
        </label>  */}
    </div>
  )
}

export default Price