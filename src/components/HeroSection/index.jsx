import React, { useState } from 'react';
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton } from './HeroStyle'
// Escritura del nombre
import Typewriter from 'typewriter-effect';
// DAtos del portfolio
import { Bio } from '../../data/constants';
// Animacion de fondo
import HeroBgAnimation from '../HeroBgAnimation';
//Fotos
import HeroImg from '../../assets/fotoPerfil1.jpg';
import HeroImg1 from '../../assets/fotoPerfil1.jpg';


const Hero = () => {
    // Define el estado para controlar qué imagen se muestra
    const [hovered, setHovered] = useState(false);

    // Definir la lógica para cambiar la imagen cuando se pasa el mouse
    const handleHover = () => {
        setHovered(!hovered);
    };
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hola, soy <br /> {Bio.name}</Title>
                        <TextLoop>
                            Soy un
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Mirar CV</ResumeButton>
                    </HeroLeftContainer>
                    <HeroRightContainer id="Right">
                        <Img
                            src={hovered ? HeroImg1 : HeroImg}
                            alt={hovered ? "hero-image1" : "hero-image"}
                            // Maneja el evento de pasar el mouse sobre la imagen
                            onMouseEnter={handleHover}
                            // Maneja el evento de sacar el mouse de la imagen
                            onMouseLeave={handleHover}
                        />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default Hero