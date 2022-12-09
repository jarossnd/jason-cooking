import React from 'react'
import PropTypes from 'prop-types'
// Utilities
import kebabCase from 'lodash/kebabCase'
// Components
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/SEO'

const TopicStyles = styled.div`
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
    border-style: solid;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    color: var(--orange);
    background-color: var(--blue);
    min-width: 200px;
    text-align: center;
    display: inline-block;
  }
  .menu > li a {
    display: block;
  }
  .menu > li:hover {
    margin: 15px;
    border-style: solid;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    border-color: var(--black);
  }
  .menu a {
    text-decoration: none;
    color: var(--white);
  }
  .menu a:hover {
    color: var(--orange);
  }
  @media screen and (max-width: 950px) {
    .menu > li {
      width: 100%;
  }
`

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <>
    <SEO title="Categories" />
    <div className="item1">
      <h1>Categories</h1>
      <TopicStyles>
        <div className="container">
          <ul className="menu">
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/categories/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </TopicStyles>
    </div>
  </>
)
TagsPage.propTypes = {
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
export default TagsPage
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
