import React from 'react'
// Icono del logo
import { GiMountaintop } from "react-icons/gi";
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { useTheme } from 'styled-components';
import { Close, CloseRounded } from '@mui/icons-material';
import { Bio } from '../../data/constants';
import { FaBars } from 'react-icons/fa';


const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const theme = useTheme()
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }} >
                        <Span>Portfolio</Span>
                        {/* <GiMountaintop size="1rem" /> <Span>Portfolio</Span> */}
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setIsOpen(!isOpen)
                    }} />
                </MobileIcon>
                <MobileIcon>
                </MobileIcon>
                <NavItems>
                    {/* <NavLink href="#about">me</NavLink> */}
                    <NavLink href='#skills'>Habilidades</NavLink>
                    <NavLink href='#projects'>Proyectos</NavLink>
                    {/* <NavLink href='#contacto'>Contacto</NavLink> */}
                </NavItems>
                <ButtonContainer>
                    <GitHubButton href={Bio.github} target="_blank">GitHub</GitHubButton>
                </ButtonContainer>
                {
                    isOpen &&
                    <MobileMenu isOpen={isOpen}>
                        <MobileLink href="#about" onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Acerca de</MobileLink>
                        <MobileLink href='#skills' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Habilidades</MobileLink>
                        <MobileLink href='#projects' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Proyectos</MobileLink>
                        <MobileLink href='#contacto' onClick={() => {
                            setIsOpen(!isOpen)
                        }}>Contacto</MobileLink>
                        <GitHubButton style={{ padding: '10px 16px', background: `${theme.primary}`, color: 'white', width: 'max-content' }} href={Bio.github} target="_blank">Github Profile</GitHubButton>
                    </MobileMenu>
                }
            </NavbarContainer>
        </Nav >
    )
}

export default Navbar