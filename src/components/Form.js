import React, { useState } from 'react'
import Title from './Title'
import Label from './label'
import Input from './Input'
import Checkbox from './Checkbox'
import './Form.css'

function Form() {

  const [ user, setUser ] = useState('')
  const [ userError, setUserError ] = useState(false)
  const [ lastname, setLastname ] = useState('')
  const [ lastnameError, setLastnameError ] = useState(false)
  const [ email, setEmail ] = useState('')
  const [ emailError, setEmailError ] = useState(false)
  const [ checkError, setCheckError ] = useState(false)
  const [ password, setPassword ] = useState('')
  const [ passwordError, setPasswordError ] = useState(false)
  const [ confirm, setConfirm ] = useState('')
  const [ confirmError, setConfirmError ] = useState(false)
  const [ login, setLogin ] = useState(false)

  function handleChange(name, value) {
    let cond_nombre = /^[A-Z][a-z]{2,14}$/
    let cond_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
      if(name === 'nombre' && cond_nombre.test(value) === true){
        setUserError(false)
        setUser(value)
      }
      else if(name === 'nombre' && cond_nombre.test(value) === false){
        setUserError(true)
      }
      if(name === 'apellido' && cond_nombre.test(value) === true){
        setLastnameError(false)
        setLastname(value)
      }
      else if(name === 'apellido' && cond_nombre.test(value) === false){
        setLastnameError(true)
      }
      if(name === 'email' && cond_email.test(value) === true){
        setEmailError(false)
        setEmail(value)
      }
      else if(name === 'email' && cond_email.test(value) === false){
        setEmailError(true)
      }
      if(name === 'contraseña'){
        if(value.length < 6){
          setPasswordError(true)
        }
        else{
          setPasswordError(false)
          setPassword(value)
        }
      }
      if(name === 'confirmar'){
        if(value !== password){
          setConfirmError(true)
        }else{
          setConfirmError(false)
          setConfirm(value)
        }
      }
  }

  function handleClick() {
    let reg = { user, lastname, email, password, confirm }
    if(reg){
      setLogin(true)
    }
/*     let r = Object.values(reg)
    r.forEach(rg => {
      if(rg.values === false){
        setLogin(false)
      }
      else if(rg.values === true){
        setLogin(true)
      }
    }) */
  }

  function isCheck() {
      let elementM = document.querySelector('#checkM').checked
      let elementF = document.querySelector('#checkF').checked
      if(elementM === true || elementF === true){
        setCheckError(false)
      }
      else{
        setCheckError(true)
      }   
  }

  return (
    <div className="form__container">
      { login ?
      <div className="home">
        <h1 className="login-title">Bienvenido {user}!</h1>
      </div>
      :
    <div className="form">
      <Title/>
      <Label text='Nombre'/>
      <Input 
        attribute= {{
          id: 'nombre',
          name: 'nombre',
          type: 'text',
          placeholder: 'Ingrese su nombre',
        }}
        handleChange={handleChange}
        param={userError}
      />
      { userError &&
        <label className='label-error'>
          Campo inválido, escriba respetando mayúsculas
        </label> } 
      <Label text='Apellido'/>
      <Input
       attribute= {{
        id: 'apellido',
        name: 'apellido',
        type: 'text',
        placeholder: 'Ingrese su apellido',
      }}
        handleChange={handleChange}
        param={lastnameError} 
      />
      { lastnameError &&
        <label className='label-error'>
          Campo inválido, escriba respetando mayúsculas
        </label> } 
      <Label text='Email'/>
      <Input
       attribute= {{
        id: 'email',
        name: 'email',
        type: 'text',
        placeholder: 'Ingrese su email',
      }}
        handleChange={handleChange}
        param={emailError} 
      />
      { emailError &&
        <label className='label-error'>
          Campo inválido
        </label> } 
      <Label text='Género'/>
      <Checkbox 
        attribute={{
          id:'checkM',
          text:'Masculino',
          name:'checkboxMasc'
        }}
        isCheck={isCheck}
      />
      <Checkbox 
        attribute={{
          id:'checkF',
          text:'Femenino',
          name:'checkboxFem'
        }}
        isCheck={isCheck}
      />
      <Label text='Contraseña'/>
      <Input
       attribute= {{
        id: 'contraseña',
        name: 'contraseña',
        type: 'password',
        placeholder: 'Ingrese su contraseña',
      }}
        handleChange={handleChange}
        param={passwordError} 
      />
      { passwordError &&
        <label className='label-error'>
         Campo inválido
        </label> } 
      <Label text='Confirme contraseña'/>
      <Input
       attribute= {{
        id: 'confirmar',
        name: 'confirmar',
        type: 'password',
        placeholder: 'Confirme su contraseña',
      }}
        handleChange={handleChange}
        param={confirmError} 
      />
      { confirmError &&
        <label className='label-error'>
          Campo inválido
        </label> } 
       { userError || lastnameError || emailError || passwordError || confirmError || checkError ? 
        <button className="no">
          Registrarse
        </button> 
        :  
        <button className="send-button" onClick={handleClick}>
          Registrarse
        </button> } 
    </div> }
  </div>
  )
}

export default Form