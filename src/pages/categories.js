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
  a {
    font-size: 3rem;
  }
  ul {
    list-style-type: none;
    text-align: center;
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
          <ul>
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link to={`/categories/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue}{' '}
                </Link>
                ({tag.totalCount})
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
