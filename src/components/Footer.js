import React from "react"
import styled from "styled-components"

const FooterStyles = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
  margin-left: auto;
  margin-right: auto;

  footer p {
    text-align: center;
    font-size: 2rem;
  }
  .footerSmall {
    font-size: 1rem;
  }
`

export default function Footer() {
  return (
    <FooterStyles>
      <footer>
        <hr />
        <p>&copy; {new Date().getFullYear()} - Jason's Cookbook</p>
      </footer>
    </FooterStyles>
  )
}
