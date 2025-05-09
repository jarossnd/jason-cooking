import React from 'react'
import PropTypes from 'prop-types'
// Components
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'

const TopicStyles = styled.div`
  li {
    text-align: center;
  }
  li a {
    font-size: 4rem;
  }
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagTitle = `${tag}`
  const tagCount = `${totalCount}`
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`
  return (
    <div className="item1">
      <h1>{tagTitle}</h1>
      <span style={{ listStyle: `none` }}>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          const { date } = node.frontmatter
          const { description } = node.frontmatter
          return (
            <TopicStyles>
              <li key={slug}>
                <Link to={slug} aria-label={`Read more about ${title}`}>
                  {title}
                </Link>
                <section>
                  <p>{description}</p>
                </section>
              </li>
            </TopicStyles>
          )
        })}
      </span>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
    </div>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}
export default Tags
export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
