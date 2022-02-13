import React from 'react';
import Styled from 'styled-components';
import FormCard from './FormCard'
const PersonalInfo=() =>{
  return (
    <FormContainer>
            <FormGroupArea>
                <FormCard 
                    id="fullname"
                    title="Full Name"
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                />  
             <FormCard 
                    id="email"
                    title="Email"
                    type="email"
                    name="email"
                    placeholder="Enter You email"
                />  
             <FormCard 
                    id="Phno"
                    title="Phone Number"
                    type="text"
                    name="Phno"
                    placeholder="+2519..."
                /> 
            <FormCard 
                    id="pass"
                    title="Password"
                    type="password"
                    name="password"
                    placeholder="set password"
                /> 
            <FormCard 
                    id="cpass"
                    title="Comfirm Password"
                    type="password"
                    name="cpass"
                    placeholder="Comfirm Password"
                /> 
               

            </FormGroupArea>
            <FormGroupArea>
                <FormCard 
                    id="fullname"
                    title="Full Name"
                    type="text"
                    name="fullname"
                    placeholder="Full Name"
                />  
             <FormCard 
                    id="email"
                    title="Email"
                    type="email"
                    name="email"
                    placeholder="Enter You email"
                />  
             <FormCard 
                    id="Phno"
                    title="Phone Number"
                    type="text"
                    name="Phno"
                    placeholder="+2519..."
                /> 
            <FormCard 
                    id="pass"
                    title="Password"
                    type="password"
                    name="password"
                    placeholder="set password"
                /> 
            <FormCard 
                    id="cpass"
                    title="Comfirm Password"
                    type="password"
                    name="cpass"
                    placeholder="Comfirm Password"
                /> 
               

            </FormGroupArea>
    </FormContainer>
  )
}

export default PersonalInfo
const FormContainer = Styled.form`
display:flex;
justify-content:space-between;
align-items:center;

`
const FormGroupArea = Styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction:column;


`