import styled from "styled-components";

const Container=styled.div`
    width:100%;
    height:70vh;
    display:flex;
    position:relative;
    overflow:hidden;

`

const Arrow=styled.div`
    width:50px;
    height:50px;
    background-color:#fff7f7;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:0;
    bottom:0;
    left: ${props=>props.direction==="left" && "10px"};
    right: ${props=>props.direction==="right" && "10px"};
    margin:auto;
    cursor:pointer;
    opacity:0.5;
    z-index:2;
`

const Wrapper=styled.div`
    height:100%;
    display:flex;
    transform:translateX(-${props=>props.translate*100}vw);
    transition: 1.5s;
`
const Slide=styled.div`
    width:100vw;
    height:70vh;
    display:flex;
    align-items:center;
    background-color:${props=>props.background};

`

const ImgContainer=styled.div`
    height:100%;
    flex:1;
    display:flex;
    align-items:center;
    justify-content:center;
    overflow: hidden;
    position:relative;

`
const Image=styled.img`    
    // height:170%;
    // position:absolute;
    // left:10%;
    // top:-53%;
    // @media (max-width: 1000px) {
    //     height:120%;
    //     left:-15%;
    //     top:-15%;
    // }
    
`


const InfoContainer=styled.div`
    flex:1;
    padding:50px;
    @media (max-width: 1000px) {
        padding:0px;
    }
`
const Title=styled.h1`
    font-size:70px;
    @media (max-width: 1000px) {
        font-size:40px;
    }
`
const Desc=styled.p`
    margin:50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing:3px;
    @media (max-width: 1000px) {
        margin:20px 0px;
        
    }
`
const Button=styled.button`
    padding:10px;
    font-size:20px;
    background-color:black;
    color:white;
    border-radius:5px;
    cursor:pointer;
    border:none;
    outline:none;
`

export {Container,
Arrow,
Wrapper,
Slide,
ImgContainer,
InfoContainer,
Image,Title,
Desc,
Button}