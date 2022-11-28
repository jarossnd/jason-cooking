import React from 'react'
import styled from 'styled-components'
import SEO from '../components/SEO'
import imgJason from '../images/profile-pic.png'

const AboutStyles = styled.div`
  .profilePic {
    margin: auto;
    display: block;
  }
`

export default function AboutPage() {
  return (
    <AboutStyles>
      <SEO title="About" />
      <h1>About</h1>
      <p>
        Thank you for visiting my cookbook. I enjoy cooking and creating
        websites so that is how jason.cooking was born. I started this website
        in 2022 to track my personal recipes and allow family and friends to
        easily access my recipes. I have no plans on making this site searchable
        on the internet. If you were able to stumble upon this website by
        accident, then it is your lucky day. Check back at a future time to find
        more recipes that I have published. This website was created using
        GatsbyJS and is hosted with Gatsby Cloud.
      </p>
      <img className="profilePic" src={imgJason} alt="Jason Ross" />
    </AboutStyles>
  )
}
