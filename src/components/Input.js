import React from 'react'

function Input({ attribute, handleChange, param }) {
  return (
    <div className="form__fields">
      <input
      id={attribute.id}
      name={attribute.name}
      placeholder={attribute.placeholder}
      type={attribute.type}
      onChange={e => handleChange(e.target.name, e.target.value)}
      className={param ? 'input-field-warning' : 'input-field' }
      />
    </div>
  )
}

export default Input