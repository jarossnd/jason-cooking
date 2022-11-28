import React from "react"
import styled from "styled-components"
import Footer from "./Footer"
import "normalize.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles"

const ContentStyles = styled.div`
  position: relative;
  width: 75%;
  float: right;
  height: 100vh;
  h1 {
    font-size: 4rem;
    color: var(--black);
    text-align: center;
  }
  h2 {
    font-size: 3rem;
    color: var(--black);
  }
  h3 {
    font-size: 2rem;
    color: var(--black);
  }
  p {
    font-size: 2rem;
  }
  ul li {
    font-size: 2rem;
  }
  ol li {
    font-size: 2rem;
  }
`

const SideBarStyles = styled.div`
  position: fixed;
  background: rgb(5, 68, 104);
  width: 25%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 20px 0;
  transition: all 0.5s ease;
  * {
    list-style: none;
    text-decoration: none;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Open Sans", sans-serif;
  }
  .profile {
    margin-bottom: 30px;
    text-align: center;
  }
  .profile h3 {
    color: #ffffff;
    margin: 10px 0 5px;
  }
  .profile p {
    color: rgb(206, 240, 253);
    font-size: 14px;
  }
  .picture {
    display: block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto;
  }
  ul li a {
    display: block;
    padding: 13px 30px;
    border-bottom: 1px solid #10558d;
    color: rgb(241, 237, 237);
    font-size: 16px;
    position: relative;
  }
  ul li a:hover,
  ul li a.active {
    color: #0c7db1;
    background: white;
    border-right: 2px solid rgb(5, 68, 104);
  }
  ul li a:hover:before,
  ul li a.active:before {
    display: block;
  }
  p {
    color: var(--orange);
  }
`

export default function Layout({ children }) {
  return (
    <div>
      <GlobalStyles />
      <SideBarStyles>
        <div className="profile">
          <StaticImage
            className="picture"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile-pic.png"
            width={100}
            height={100}
            quality={95}
            alt="Profile picture"
          />
          <h3>Jason's Cookbook</h3>
          <p>Dad Cook</p>
          <br />
          <ul>
            <li>
              <Link to="/">
                <span className="item">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/categories">
                <span className="item">Categories</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <span className="item">About</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <span className="item">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </SideBarStyles>
      <ContentStyles>{children}</ContentStyles>
    </div>
  )
}
