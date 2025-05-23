import './App.css'
import { useState, useEffect } from "react"
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './utils/Theme'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Skills from './components/Skills'
import { BrowserRouter as Router } from 'react-router-dom'
import Contacto from './components/Contacto'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ProjectDetails from './components/ProjectDetails'

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

// Esto es para el fondo
const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(0, 0, 255, 0.15) 0%, rgba(0, 0, 255, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
          </Wrapper>
          <Projects />
          <Wrapper>
            {/* <Contacto /> */}
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider >
  )
}

export default App
