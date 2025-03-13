import React from "react"
import cn from "classnames"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ src, className, small, hasMargin }) => {
  // Set ImageData.
  return (
    <BackgroundImage
      Tag="div"
      className={cn("background-image__inner", {
        className,
      })}
      fluid={src}
      backgroundColor={`#040e18`}
    >
      <BackgroundPadder className={hasMargin ? "hasmarg" : ""} />
    </BackgroundImage>
  )
}

const BackgroundPadder = styled.div`
  display: block;
  margin: 0;
  padding-top: ${(2 / 4) * 100}%;

  &.hasmarg {
    margin: 3rem 0;
  }

  @media (max-width: 1366px) {
    margin-bottom: 0;
  }
`
const StyledBackgroundSection = styled(BackgroundSection)`
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
`

export default StyledBackgroundSection
