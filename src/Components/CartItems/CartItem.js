import React from 'react'
import styled from 'styled-components'
import Remove from '@mui/icons-material/Remove'
import Add from '@mui/icons-material/Add'
const Container=styled.div`
height:30vh;
display:flex;
border-bottom:1px solid teal;
margin:10px;
`
const Left=styled.div`
flex:1;
padding:5px;
display:flex;
justify-content:center;
align-items:center;
`
const Image=styled.img`
width:80%;
height:80%;
object-fit:scale-down;
`

const Center=styled.div`
flex:3;
padding:5px;
`

const Title=styled.h3`

`
const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
margin-top:10px;
`
const Amount=styled.span`
width:30px;
height:30px;
border-radius:10px;
border: 1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin:0px 5px;
`

const Extralinks=styled.div`
display:display;
`

const DeleteItem=styled.a`
margin:5px;
`
const SaveforLater=styled.a`
margin:5px;
`


const Right=styled.div`
flex:1;
padding:10px;
display:flex;
justify-content:right;
`

const Price=styled.h4`

`
const CartItem = ({item}) => {
  return (
    <Container>
        <Left>
            <Image src={item.img}></Image>
        </Left>
        <Center>
            <Title>How to get Rich:One of the world's Greatest Enterprenuers Shares</Title>
            <AmountContainer>
                <Remove/>
                <Amount></Amount>
                <Add/>
                <Extralinks>
                <DeleteItem>Delete </DeleteItem>
                <SaveforLater> Save for later</SaveforLater>
                </Extralinks>
            </AmountContainer>
            
        </Center>
        <Right>
            <Price>$10</Price>
        </Right>
    </Container>
  )
}

export default CartItem