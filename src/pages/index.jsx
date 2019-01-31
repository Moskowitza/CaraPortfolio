import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Aaron Moskowitz.
        </BigTitle>
        <Subtitle>A Full-Stack Developer in Philadelphia.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Animal Sanctuaries"
            link="https://farmsanctuaries.herokuapp.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            An application for finding Animal Sanctuaries. React MySQL Heroku
          </ProjectCard>
          <ProjectCard
            title="Philly Neighbors"
            link="https://stormy-temple-91988.herokuapp.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            A community bulletin board. Sequelize MERN Handlebars
          </ProjectCard>
          <ProjectCard
            title="Lost Memory"
            link="https://moskowitza.github.io/clickyreact/"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            A memory game using React.
          </ProjectCard>
          <ProjectCard
            title="Halloween Hangman"
            link="https://moskowitza.github.io/Hangman-Game/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Hangman game using JavaScript.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>I'm a webdev with expertise in JavaScript frameworks and NodeJS.</AboutSub>
        </AboutHero>
        <AboutDesc>
          I have a background in Biomedical Engineering and Medical Innovation. I spent 15 years advocating for better
          oversight of medical technology and patient safety. I have experience in healthcare VC and entrepreneurship.
          I'm available for hire for consulting, freelance web-development, and project management.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:moskowitzaaron@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/moskowitzaaron/">LinkedIn</a> &{' '}
            <a href="https://moskowitza.github.io">Github</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
