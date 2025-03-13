import React from "react"
import PropTypes from "prop-types"
import { isMobile } from "react-device-detect"

import styled from "styled-components"
import { useInView } from "react-hook-inview"

import "./Intro.scss"
import IntroTop from "../IntroTop"
import IntroBottom from "../IntroBottom"
import { PageLogo } from "../../utils/globals"

const LogoWrapper = styled.div`
  display: block;
  max-width: 280px;
  width: 100%;
`
const TextBlue = styled.div`
  color: #009ee2;
`

const Intro = ({ titleWhite, titleBlue, onEnterViewport, onLeaveViewport }) => {
  const [ref] = useInView(
    {
      onEnter: () => onEnterViewport(),
      onLeave: () => onLeaveViewport(),
    },
    [""]
  )

  return (
    <header className="intro-section intro-section--full" ref={!isMobile ? ref : null}>
      <div className="intro-section__left intro-section__left--intro">
        <div className="intro-section__title">
          <div>{titleWhite}</div>
          <TextBlue>{titleBlue}</TextBlue>
        </div>
        <LogoWrapper ref={isMobile ? ref : null}>
          <PageLogo />
        </LogoWrapper>
      </div>
      <div className="intro-section__right">
        <div className="intro-section__right-images">
          <IntroTop className="intro-section__right-image intro-section__right--top" />
          <IntroBottom className="intro-section__right-image intro-section__right--bottom" />
        </div>
        <div className="intro-section__middle">
          <div className="intro-section__middle-inner" />
        </div>
      </div>
    </header>
  )
}

Intro.propTypes = {
  titleWhite: PropTypes.string.isRequired,
  titleBlue: PropTypes.string,
}

Intro.defaultProps = {
  titleBlue: "",
}

export default Intro
