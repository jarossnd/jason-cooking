import * as React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import SEO from '../components/SEO'

const RecipeStyle = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1000px;
  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 5rem;
  }
  @media screen and (max-width: 950px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 4rem;
    }
  }

  @media screen and (max-width: 400px) {
    h1 {
      font-size: 4rem;
    }
    h2 {
      font-size: 3rem;
    }
  }
`

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <div location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      >
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.frontmatter.title,
            datePublished: post.frontmatter.date,
            description: post.frontmatter.description || post.excerpt,
            articleBody: post.html,
            url: location.href,
          })}
        </script>
      </SEO>
      <RecipeStyle>
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>
        <nav className="blog-post-nav">
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </nav>
      </RecipeStyle>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
