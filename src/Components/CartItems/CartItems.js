import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'
import { popularProducts } from '../../Data/Data'
const Container=styled.div`

`
const CartItems = () => {
  return (
    <Container>
        {popularProducts.map(item=>(
            <CartItem item={item} key={item.id}/>
        ))}
        
    </Container>
  )
}

export default CartItems