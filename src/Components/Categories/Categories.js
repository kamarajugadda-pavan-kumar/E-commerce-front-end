import React from 'react'
import Category from './Category'
import { categories } from '../../Data/Data'
import { Container } from './Categories.Styles'
const Categories = () => {
  return (
    <Container>
    {categories.map(item=>(<Category key={item.id} item={item}/>))}
    </Container>
  )
}

export default Categories