import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Bio from '../components/bio'
import SEO from '../components/SEO'
import { Helmet } from 'react-helmet'

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <div location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No recipes found. Check back later or explore our <Link to="/">homepage</Link> for more content!
        </p>
      </div>
    )
  }

  return (
    <div location={location} title={siteTitle}>
      <SEO title="Recipes" />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Jason's Cookbook Recipes",
            description: "A collection of recipes from Jason's Cookbook.",
            url: "https://jason.cooking/recipes",
            blogPost: posts.map(post => ({
              "@type": "BlogPosting",
              headline: post.frontmatter.title,
              datePublished: post.frontmatter.date,
              description: post.frontmatter.description || post.excerpt,
              url: `https://jason.cooking${post.fields.slug}`,
            })),
          })}
        </script>
      </Helmet>
      <h1>Latest Recipes</h1>
      {posts.length > 0 && (
        <div className="featured-recipe">
          <h2>Featured Recipe</h2>
          <article>
            <h3>
              <Link to={posts[0].fields.slug}>{posts[0].frontmatter.title}</Link>
            </h3>
            <p>{posts[0].frontmatter.description || posts[0].excerpt}</p>
          </article>
        </div>
      )}
      <ol style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', listStyle: 'none' }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url" aria-label={`Read more about ${post.frontmatter.title}`}>
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                  {post.frontmatter.tags && (
                    <p>
                      Tags: {post.frontmatter.tags.map(tag => (
                        <Link key={tag} to={`/tags/${tag}/`} style={{ marginRight: '5px' }}>
                          {tag}
                        </Link>
                      ))}
                    </p>
                  )}
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
