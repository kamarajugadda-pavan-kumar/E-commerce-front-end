import React from 'react'
import {Search, ShoppingCartOutlined} from '@material-ui/icons'
import Badge from '@material-ui/core/Badge'
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
                    <Search style={{color:'gray', fontSize:15}}/>
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
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>

            </Right>
            
        </Wrapper>
        
    </Container>
  )
}

export default Navbar