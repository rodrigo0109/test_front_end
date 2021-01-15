import React from 'react'

function Label({ text }) {
  return (
    <label className="label" htmlFor={text}>{text}</label>
  )
}

export default Label