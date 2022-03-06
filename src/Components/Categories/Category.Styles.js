import styled from 'styled-components'

export const Container=styled.div`
    flex:1;
    margin:3px;
    height:70vh;
    position:relative;
`

export const Image=styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
`

export const Info=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
`

export const Title=styled.h1`
    font-size:40px;
    color:white;
`
export const Button=styled.button`
    border:none;
    background:black;
    color:white;
    padding:10px;
    margin:10px;
    border-radius:4px;
    cursor:pointer;
`