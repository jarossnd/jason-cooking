import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import imgLogo from '../images/jason-cooking-logo.svg'

const NavBar = styled.nav`
  .top-nav {
    margin-left: auto;
    margin-right: auto;
    display: flex; /* Move UL from bottom of logo to right side of logo */
    flex-direction: row;
    align-items: center; /* Align vertically */
    justify-content: space-between; /* Move menu to right side of screen */
    color: var(--blue);
    height: 50px;
    padding-top: 3rem;
    padding-right: 3rem;
    padding-bottom: 3rem;
    padding-left: 3rem;
    font-size: 5rem;
    background-color var(--blue);
  }

  a {
    text-decoration: none;
    color: var(--tan);
    font-size: 5rem;
    transition: color 300ms;

    :hover {
      color: var(--orange);
      text-decoration: none;
    }
  }

  .logo {
    font-size: 5rem;
    color: var(--tan);
  }

  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .menu > li {
    margin: 0 1rem;
    z-index: 1;
  }
  
  
  .logo a {
    font-size: 4rem;
  }
  
  @media screen and (max-width: 950px) {
    .menu {
      display: none;
  }
  .logo {
    text-align: center;
    margin: auto;
    
  }

  .logo a {
    text-align: center;
    margin: auto;
  }
`

const MenuIcon = styled.button`
  position: absolute;
  top: 3rem;
  right: 3rem;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 5rem;
  height: 5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2048;

  div {
    width: 5rem;
    height: 0.5rem;
    background: var(--tan);
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition: opacity 300ms, transform 300ms;

    :first-child {
      transform: ${({ nav }) => (nav ? 'rotate(45deg);' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ nav }) => (nav ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ nav }) => (nav ? 'rotate(-45deg);' : 'rotate(0)')};
    }
  }
  @media screen and (max-width: 950px) {
    display: flex;
  }
`

const MenuLinks = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  background-color: var(--blue);
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 300ms;
  transform: ${({ nav }) => (nav ? 'translateX(0)' : 'translateX(100%)')};
  z-index: 1024;

  ul {
    list-style-type: none;
  }

  li {
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--tan);
    font-size: 5rem;
    transition: color 300ms;

    :hover {
      color: var(--orange);
      text-decoration: none;
    }
  }
`

const Nav = () => {
  const [nav, showNav] = useState(false)

  return (
    <div>
      <NavBar>
        <section className="top-nav">
          <div className="logo">
            <img
              src={imgLogo}
              alt="Jason Cookbook Logo"
              width="30"
              height="30"
            />{' '}
            <Link to="/">Jason's Cookbook</Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <MenuIcon nav={nav} onClick={() => showNav(!nav)}>
            <div />
            <div />
            <div />
          </MenuIcon>
          <MenuLinks nav={nav}>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/categories">Categories</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </MenuLinks>
        </section>
      </NavBar>
    </div>
  )
}

export default Nav
