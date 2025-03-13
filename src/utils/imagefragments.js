import { graphql } from "gatsby"

export const imageFragment = graphql`
  fragment imageFragment on File {
    childImageSharp {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`

export const imageFragmentSmall = graphql`
  fragment imageFragmentSmall on File {
    childImageSharp {
      fluid(width: 250) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`