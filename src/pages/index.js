import React from 'react'
import PropTypes from 'prop-types'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/SEO'

const HomeStyles = styled.div`
  .menu {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .menu > li {
    margin: 15px;
    border-radius: 10px;
    padding: 10px;
    color: var(--orange);
    background-color: var(--blue);
    min-width: 200px;
    text-align: center;
    display: inline-block;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .menu > li a {
    display: block;
  }
  .menu > li:hover {
    margin: 15px;
    border-radius: 10px;
    padding: 10px;
    border-color: var(--black);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
  .menu a {
    text-decoration: none;
    color: var(--white);
  }
  .menu a:hover {
    color: var(--orange);
  }
  p {
    text-align: center;
  }
  @media screen and (max-width: 950px) {
    .menu > li {
      width: 100%;
  }
`

const HomePage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Jason's Cookbook",
          description: "Explore a variety of recipes categorized for easy navigation.",
          url: "https://jason.cooking",
        })}
      </script>
    </Helmet>
    <SEO title="Home" description="Explore Jason's Cookbook with a variety of recipes categorized for easy navigation." />
    <div className="item1">
      <HomeStyles>
        <h1>Welcome</h1>
        <p>
          Welcome to Jason's Cookbook! This site contains my recipes that I have
          obtained over the years. Select a category below to get started.
        </p>
        <div className="container">
          {!group ? (
            <p>Loading categories...</p>
          ) : (
            <ul className="menu">
              {group.map(tag => (
                <li key={tag.fieldValue}>
                  <Link to={`/categories/${kebabCase(tag.fieldValue)}/`} aria-label={`View recipes in ${tag.fieldValue}`}>
                    {tag.fieldValue}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </HomeStyles>
    </div>
  </>
)
HomePage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}
export default HomePage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
