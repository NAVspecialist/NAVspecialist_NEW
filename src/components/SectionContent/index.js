import React, { useState } from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import { useInViewEffect } from "react-hook-inview"
import styled from "styled-components"

import "./Section.scss"

const TextBlue = styled.div`
  color: #009ee2;
`

const SmallTitle = styled.div`
  color: #666666;
  font-size: 1.2rem;
  font-weight: normal;
  margin-bottom: 0.4rem;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 0.2rem;
  }
`

const SectionContent = ({
  title,
  titleWhite,
  titleBlue,
  children,
  full,
  half,
  three,
  quarter,
  intro,
  removeLeft,
}) => {
  const [isVisible, setIsVisible] = useState(false)

  const ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
      setIsVisible(entry.isIntersecting)
    },
    { threshold: 0 }
  )

  return (
    <div
      ref={ref}
      className={cn("page-section", {
        "page-section--full": full,
        "page-section--half": half,
        "page-section--three": three,
        "page-section--quarter": quarter,
        inview: isVisible,
        "remove-left": removeLeft,
      })}
    >
      <div
        className={cn("page-section__left", {
          "page-section__left--intro": intro,
        })}
      >
        <div className="page-section__title">
          {title && <SmallTitle>{title}</SmallTitle>}
          <div>{titleWhite}</div>
          <TextBlue>{titleBlue}</TextBlue>
        </div>
      </div>
      <div className="page-section__right">{children}</div>
    </div>
  )
}

SectionContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  titleWhite: PropTypes.string.isRequired,
  titleBlue: PropTypes.string,
  full: PropTypes.bool,
  half: PropTypes.bool,
  three: PropTypes.bool,
  intro: PropTypes.bool,
  removeLeft: PropTypes.bool,
}

// Specifies the default values for props:
SectionContent.defaultProps = {
  title: null,
  titleBlue: "",
  full: false,
  half: false,
  three: false,
  intro: false,
  removeLeft: false,
}

export default SectionContent
