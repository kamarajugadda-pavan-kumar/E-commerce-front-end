import React, { useState } from 'react'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
// import image from "../../images/1.png"
import { Container,
  Arrow,Wrapper,
  ImgContainer,
  InfoContainer,
  Image, 
  Slide,
  Title,
  Desc,
  Button} from './Slider.Styles'
import {slider_data} from '../../Data/Data';
const Slider = () => {
  const [translate,setTranslate]=useState(0)

  const handleClick=(dir)=>{
    if(dir==="left"){
      setTranslate(translate>0 ? translate-1 : 2)
    }else{
      setTranslate(translate<2 ?translate+1 : 0)
    }
  }

  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowBackIosNewOutlinedIcon/>
        </Arrow>
        <Wrapper translate={translate}>
            {slider_data.map((item)=>(
              <Slide background={item.bg} key={item.id}>
                <ImgContainer>
                  <Image src={item.image}></Image>
                </ImgContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc} </Desc>
                    <Button>Shop Now</Button>
                </InfoContainer>
              </Slide>
            ))}
            
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick('right')}>
            <ArrowForwardIosOutlinedIcon/>
        </Arrow>
    </Container>
  )
}

export default Slider