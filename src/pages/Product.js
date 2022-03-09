import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import styled from 'styled-components'
import Remove from '@mui/icons-material/Remove'
import Add from '@mui/icons-material/Add'

const Container=styled.div`

`
const Wrapper=styled.div`
padding:50px;
display:flex;
`
const ImageContainer=styled.div`
flex:1;
`
const Image=styled.img`
width:100%;
height:90vh;
object-fit:scale-down;
`
const InfoContainer=styled.div`
flex:1;
padding:0px 50px;
`

const Title=styled.h1`
font-weight:200;

`

const Desc=styled.p`
margin:20px 0px;
`

const Price=styled.span`
font-size:40px;
font-weight:100;
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
width:50%;
margin:30px 0px;
`

const Filter=styled.div`
display:flex;
align-items:center;
`

const FilterTitle=styled.div`
font-size:20px;
font-weight:200;
`

const FilterColor=styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color:${props=>props.color};
margin:0px 5px;
cursor:pointer;
`

const FilterSize=styled.select`
margin-left:10px;
padding:10px;
border-radius:4px;
`

const FilterSizeOption=styled.option`

`

const AddContainer=styled.div`
width:50%;
display:flex;
align-items:center;
justify-content:space-between;
`


const AmountContainer=styled.div`
display:flex;
align-items:center;
font-weight:700;
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

const Button=styled.button`
padding:15px;
border:1px solid teal;
background-color:white;
cursor:pointer;
border-radius:4px;
font-size:15px;
&:hover{
    background-color:black;
    color:white;
}
`


const Product = () => {
  return (
    <Container>
        <Navbar/>
            <Wrapper>
                <ImageContainer>
                    <Image src="https://m.media-amazon.com/images/I/7113XqJIZ9L._UX679_.jpg"/>
                </ImageContainer>
                <InfoContainer>
                    <Title>Wish Karo Baby Girls Frocks Dress-</Title>
                    <Desc>Care Instructions: Hand Wash 
                        Fit Type: Regular
                        Fabric: Soft Lycra
                        Style: A-Line
                        Wash Care: Hand Wash In Cold Water With Mild Detergent.
                        Guide: Please Refer Size Chart For Better Fitting
                        Closure Type: Zipper; Sleeve Type: Sleeveless</Desc>
                    <Price>RS.1000</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color='black'/>
                            <FilterColor color='darkblue'/>
                            <FilterColor color='gray'/>
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                                <FilterSizeOption>XXL</FilterSizeOption>
                                <FilterSizeOption>XXXL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount></Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Product