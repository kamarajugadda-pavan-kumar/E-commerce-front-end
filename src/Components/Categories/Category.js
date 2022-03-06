import React from 'react'
import { Container,Image,Info,Title,Button} from './Category.Styles'
const Category = ({item}) => {
  return (
    <Container>
        <Image src={item.img} />
        <Info>
            <Title>{item.title}</Title>
            <Button>SHOP NOW</Button>
        </Info>
    </Container>
  )
}

export default Category