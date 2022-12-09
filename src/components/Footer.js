import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.div`
  footer {
    margin-left: auto;
    margin-right: auto;

    bottom: 0;
    width: 100%;
  }

  footer p {
    text-align: center;
    font-size: 3rem;
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
