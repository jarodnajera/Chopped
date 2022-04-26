import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroP, 
    HeroH1, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight 
} from './HeroElements';
import { Button } from '../ButtonElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
  return (
      <HeroContainer id="home">
          <HeroBg>
              <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
          </HeroBg>
          <HeroContent>
              <HeroH1>CHOPPED: Cooking Made Easy</HeroH1>
              <HeroP>
                  Countless recipes for your enjoyment. Try one!
              </HeroP>
              <HeroBtnWrapper>
                  <Button to="about" 
                  onMouseEnter={onHover} 
                  onMouseLeave={onHover}
                  primary='true'
                  dark='true'
                  >
                      Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
              </HeroBtnWrapper>
          </HeroContent>
      </HeroContainer>
  )
}

export default HeroSection