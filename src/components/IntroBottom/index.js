import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "billede_4.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <div className={className}>
          <BackgroundImage
            Tag="div"
            className="background-image__inner"
            fluid={imageData}
            backgroundColor={`#040e18`}
            style={{
              width: "100%",
              height: "100%",
            }}
          ></BackgroundImage>
        </div>
      )
    }}
  />
)

const IntroBottom = styled(BackgroundSection)`
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default IntroBottom
