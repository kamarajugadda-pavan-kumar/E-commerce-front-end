import React from 'react'
import styled from 'styled-components'
import Navbar from '../Components/Navbar/Navbar'
import Announcement from '../Components/Announcement/Announcement'
import Products from '../Components/Products/Products'
import Newsletter from '../Components/Newsletter/Newsletter'
import Footer from '../Components/Footer/Footer'

const Container=styled.div`

`

const Title=styled.h1`
margin:20px;
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`

const Filter=styled.div`
margin:20px;
`
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;
`
const Select=styled.select`
padding:10px;
margin-right:20px;
border-radius:4px;
`
const Option=styled.option`

`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>
                    Filter Products:
                </FilterText>
                <Select>
                    <Option>white</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                    <Option>orange</Option>
                </Select>
                <Select>
                    <Option disabled selected>size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                    <Option>XXXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>
                    Sort Products:
                </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price(low to high)</Option>
                    <Option>Price(high to low)</Option>

                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList