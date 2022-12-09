import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Footer from './Footer'
import 'normalize.css'
import GlobalStyles from '../styles/GlobalStyles'
import Nav from './Nav'

const WrapperStyles = styled.div`
  /* For mobile device overflow since mobile devices do no honor the body tag */
  overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 100vh;
`

const ContentStyles = styled.div`
  margin-bottom: 125px;
  padding-left: 3rem;
  padding-right: 3rem;
  * {
    box-sizing: border-box;
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    max-width: 1400px;
  }
  .flex-item-left {
    padding: 1rem;
    flex: 50%;
  }
  .flex-item-right {
    padding: 1rem;
    flex: 50%;
  }

  @media screen and (max-width: 950px) {
    .flex-container {
      flex-direction: column;
    }
    margin-bottom: 50px;
  }
`

export default function Layout({ children }) {
  return (
    <WrapperStyles>
      <GlobalStyles />
      <Nav />
      <ContentStyles>{children}</ContentStyles>
      <Footer />
    </WrapperStyles>
  )
}
