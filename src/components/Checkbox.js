import React from 'react'


function Checkbox({ attribute, isCheck }) {
  return (
    <div className="form__gen">
      <input type="checkbox"
       id={attribute.id}
       name={attribute.name}
       onChange={ isCheck }
       />{attribute.text}
    </div>
  )
}

export default Checkbox