import React, { Fragment } from 'react'
import styled from'styled-components' 
import signupPic from '../images/signup.jpg'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const Container =styled.div`
width:100vw;
height:100vh; 
display:flex;
`
const Left=styled.img`
flex:2;
width:100%;
height:100%;
// background-image:url(${signupPic});
// background-size: cover;
// background-repeat: no-repeat;
object-fit:cover;
`

const Right=styled.div`
flex:1;
width:100%;
padding:20px;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`


const Input =styled.input`
width:55%;
margin:12px 10px 0px 0px;
padding:10px;
`
const Form =styled.form`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Title =styled.h1`
font-size:40px;
font-weight:700;
text-align:center;
`
const Agreement =styled.span`
font-size:12px;
margin:20px 10px;
`
const Button =styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color:teal;
font-color:white;
border-radius:5px;
&:hover{
  background-color:black;
  color:white;
}
`

const Register = () => {
  return (
    <Fragment>
    <Navbar/>
    <Container>
      <Left src={signupPic}/>
      <Right>
            <Title>Create an account</Title>
            <Form>
                <Input placeholder='email id'></Input>
                <Input placeholder='user name'></Input>
                <Input placeholder='password'></Input>
                <Input placeholder='confirm password'></Input>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accordance with the <b>Privacy policy</b>
                </Agreement>
                <Button>Create Account</Button>
            </Form>
      </Right>
    </Container>
    <Footer/>
    </Fragment>
  )
}

export default Register