import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { Container,Title,Description,InputContainer,Input,Button } from './Newsletter.Styles';


const Newsletter = () => {
  return (
    <Container>
        <Title>
            News Letter
        </Title>
        <Description>
            Get the new trends in fashion and great discounts via Newsletter
        </Description>
        <InputContainer>
            <Input placeholder='your Email address'></Input>
            <Button>
                <EmailIcon/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter