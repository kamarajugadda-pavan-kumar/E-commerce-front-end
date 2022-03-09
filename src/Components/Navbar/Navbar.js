import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import {Container,
    Wrapper,
    Left,
    Center,
    Right,
    Language,
    SearchContainer,
    Input,
    Logo,
    MenuItem} from './Navbar.Styles'
const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>
                    English
                </Language>
                <SearchContainer>
                    <Input/>
                    <SearchIcon style={{color:'gray', fontSize:15}}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Shopll.</Logo>
            </Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Sign In</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlinedIcon/>
                    </Badge>
                </MenuItem>

            </Right>
            
        </Wrapper>
        
    </Container>
  )
}

export default Navbar