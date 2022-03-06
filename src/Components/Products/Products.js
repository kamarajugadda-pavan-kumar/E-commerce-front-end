import React from 'react'
import { popularProducts } from '../../Data/Data'
import Product from './Product'
import {Container} from './Products.Styles'
const Products = () => {
  return (
    <Container>
        {popularProducts.map(item=>{
            return(
                <Product key={item.id} item={item}/>
            )
        })}
    </Container>
  )
}

export default Products