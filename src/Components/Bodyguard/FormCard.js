import React from 'react'
import Styled from 'styled-components'
const FormCard=(props)=> {
  return (
    <FormControl>
            <label htmlFor={props.id}>{props.title}</label>
            <input type={props.type} name={props.name}  id={props.id} placeholder={props.placeholder}/>
    </FormControl>
  )
}

export default FormCard;

const FormControl = Styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
margin-bottom: 0.5rem;
label {
    font-weight: bold;
    margin-right: 1rem;
    margin-bottom: 0.2rem;

  }
  input {
    margin-bottom: 0.5rem;

    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    font: inherit;
    padding-left: 0.5rem;

  }

`