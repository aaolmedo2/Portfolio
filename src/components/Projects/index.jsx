import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectsCards'
import { projects } from '../../data/constants'


const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');
    return (
        <Container id="projects">
            <Wrapper>
                <Title>Proyectos</Title>
                <Desc>
                    He trabajado en una amplia gama de proyectos. Desde aplicaciones web hasta aplicaciones android. Estos son algunos de mis proyectos.                </Desc>
                <ToggleButtonGroup >
                    {toggle === 'all' ?
                        <ToggleButton active value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
                        :
                        <ToggleButton value="all" onClick={() => setToggle('all')}>Todos</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'web app' ?
                        <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                        :
                        <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'android app' ?
                        <ToggleButton active value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
                        :
                        <ToggleButton value="android app" onClick={() => setToggle('android app')}>ANDROID APP'S</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'machine learning' ?
                        <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                        :
                        <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>MACHINE LEARNING</ToggleButton>
                    }
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' && projects
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                    {projects
                        .filter((item) => item.category == toggle)
                        .map((project) => (
                            <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                        ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

export default Projects