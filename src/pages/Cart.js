import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/Navbar'
import Announcement from '../Components/Announcement/Announcement'
import Footer from '../Components/Footer/Footer'
import CartItems from '../Components/CartItems/CartItems'
const Container=styled.div`
`

const Wrapper=styled.div`
display:flex;
margin:20px 10px;
`
const Left=styled.div`
flex:3;
margin:10px;
background-color:#f0ece9;

`

const Right=styled.div`
flex:1;
margin:10px;
background-color:#f0ece9;
height:40vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

const Title=styled.h2`
font-weight:300;
padding:10px;
border-bottom:1px solid teal;
`

const TitleSubTotal=styled.h2`
font-weight:200;
margin:20px;
`

const CheckoutButton=styled.button`
background-color:#292828;
color:white;
border:none;
font-size:20px;
border-radius:5px;
padding:10px 20px;
cursor:pointer;
&:hover{
    background-color:black;
}
`
const Cart = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <Left>
                <Title>
                    Shopping Cart
                </Title>
                <CartItems/>
                <h3 style={{textAlign:'right'}}>Subtotal:$100</h3>
            </Left>
            <Right>
                <Title>Checkout total 6 items</Title>
                <TitleSubTotal>Subtotal : $100</TitleSubTotal>
                <CheckoutButton>Proceed to Buy</CheckoutButton>
            </Right>
        </Wrapper>
        <Footer/>
    </Container>
    
  )
}

export default Cart