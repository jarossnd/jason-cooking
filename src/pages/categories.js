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
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  .menu > li {
    margin: 15px;
    border-radius: 10px;
    padding: 20px;
    color: var(--white);
    background-color: var(--blue);
    width: 200px;
    height: 200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .menu > li:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
  .menu > li a {
    text-decoration: none;
    color: var(--white);
    font-size: 3rem;
    font-weight: bold;
  }
  .menu > li .count {
    margin-top: 10px;
    font-size: 2rem;
    color: var(--orange);
  }
  @media screen and (max-width: 950px) {
    .menu > li {
      width: 100%;
      height: auto;
    }
  }
`;

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
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Recipe Categories",
          description: "Browse a variety of recipe categories from Jason's Cookbook.",
          url: "https://jason.cooking/categories",
          hasPart: group.map(tag => ({
            "@type": "CreativeWork",
            name: tag.fieldValue,
            url: `https://jason.cooking/categories/${kebabCase(tag.fieldValue)}/`,
          })),
        })}
      </script>
    </Helmet>
    <div className="item1">
      <h1>Categories</h1>
      <p>You will find a list of recipes categories below. Select a category below to get started.</p>
      <HomeStyles>
        <div className="container">
          <ul className="menu">
            {group.map(tag => (
              <li key={tag.fieldValue}>
                <Link
                  to={`/categories/${kebabCase(tag.fieldValue)}/`}
                  aria-label={`View recipes in ${tag.fieldValue}`}
                >
                  {tag.fieldValue}
                </Link>
                <span className="count">{tag.totalCount} recipes</span>
              </li>
            ))}
          </ul>
        </div>
      </HomeStyles>
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
