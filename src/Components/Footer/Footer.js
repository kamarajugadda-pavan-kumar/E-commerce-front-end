
import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import playstore from '../../images/playstore1.png'
const Container =styled.div`
display:flex;
background-color:teal;
`

const Left=styled.div`
flex:1;
display:flex;
flex-direction:column;
align-items:center;
padding:20px;
`

const Logo=styled.h1`
font-size:40px;
`
const Desc=styled.p`
margin:20px 0px;
`
const SocialContainer=styled.div`
display:flex;
`

const SocialIcon=styled.div`
height:40px;
width:40px;
`
const Center=styled.div`
flex:1;
padding:20px;
display:flex;
justify-content:center;
`

const CenterLeft=styled.div`
flex:1;
`
const CenterRight=styled.div`
flex:1;
`
const Title=styled.h3`

`
const Item=styled.p`
margin-left:10px;
`
const Right=styled.div`
flex:1;
padding:20px;
display:flex;
flex-direction:column;
align-items:left;
position:relative;

`
const Image=styled.img`
height:100px;
object-fit:scale-down;
background-color:teal;
position:absolute;
top:60px;
left:-10px;

`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>Shopll.</Logo>
            <Desc>Fashion that trends</Desc>
            <SocialContainer>
                    <SocialIcon>
                        <FacebookIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <InstagramIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <TwitterIcon/>
                    </SocialIcon>
                    <SocialIcon>
                        <YouTubeIcon/>
                    </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <CenterLeft>
                <Title>Online Shopping</Title>
                <Item>Men</Item>
                <Item>Women</Item>
                <Item>Kids</Item>
                <Item>Home and living</Item>
                <Item>Footwear</Item>
            </CenterLeft>
            <CenterRight>
                <Title>Useful Links</Title>
                <Item>Contact Us</Item>
                <Item>FAQ's</Item>
                <Item>T&C</Item>
                <Item>Return Policy</Item>
                <Item>Shipping</Item>
                <Item>Cancellation</Item>
                <Item>Careers</Item>
                <Item>Privacy Policy</Item>
                <Item>Blog's</Item>
            </CenterRight>
        </Center>
        <Right>
            <Title>Experience Shoplle on mobile</Title>
            <Image src={playstore}></Image>
        </Right>
    </Container>
  )
}

export default Footer