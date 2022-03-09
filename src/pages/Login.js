import React, { Fragment } from 'react'
import styled from'styled-components' 
import signupPic from '../images/login.jpg'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
const Container =styled.div`
width:100vw;
height:100vh; 
display:flex;
`

const Left=styled.div`
flex:2;
width:100%;
padding:20px;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Right=styled.div`
flex:3;
`
const ImgContainer=styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Input =styled.input`
width:55%;
margin:12px 10px 0px 0px;
padding:10px;
`
const Form =styled.form`
width:100%;
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
width:60%;
display:flex;
justify-content:space-between;
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

const Login = () => {
  return (
    <Fragment>
      <Navbar/>
      <Container>
        <Left>
          <Title>Login to your Account</Title>
              <Form>
                  <Input placeholder='email or username'></Input>
                  <Input placeholder='password'></Input>
                  <Agreement>
                    <div><a href={"/home"}>Forgot Password</a></div>
                    <div>Didn't Register yet? <a href={"/register"}><b>Register</b></a></div></Agreement>
                  <Button>Log in</Button>
              </Form>
        </Left>
        <Right>
          <ImgContainer src={signupPic}/>
        </Right>
      </Container>
      <Footer/>
    </Fragment>
  )
}

export default Login