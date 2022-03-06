import React from 'react'
import {Container, Image, Info, Icon, Circle} from './Product.Styles'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img} />
        <Info>
            <Icon>
                <SearchOutlinedIcon/>
            </Icon>
            <Icon>
                <AddShoppingCartOutlinedIcon/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product