import React from 'react'

function Input({onChange,value,title,name,color,id}) {
  return (
    <div>
      <label htmlFor={id} className="sidebar-label-container">
          <input onChange={onChange} type="radio" value={value}  name={name} id={id} />
          <span className="checkmark" style={{backgroundColor:color}}></span>{title}
          {/* <span className="option-text" style={{backgroundColor:color}}></span> */}
       </label>
      

       
    </div>
  )
}

export default Input