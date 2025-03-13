/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { Link } from "gatsby"
import ReactCountryFlag from "react-country-flag"
import styled from "styled-components"

const LangSwitcherWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 1rem;
`

const StyledLink = styled(Link)`
  margin-right: 0.6rem;
  opacity: 0.5;
  transition: opacity 0.2s ease-out;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover,
  &.active {
    opacity: 1;
  }

  img {
    display: block !important;
  }
`

const LanguageSwitcher = ({ currentLanguage }) => {
  return (
    <LangSwitcherWrapper>
      <StyledLink to="/" className={currentLanguage === "danish" ? "active" : ""}>
        <ReactCountryFlag
          countryCode="DK"
          svg
          style={{
            width: "2rem",
            height: "1.8rem",
          }}
          title="Danish"
        />
      </StyledLink>
      <StyledLink to="/en" className={currentLanguage === "english" ? "active" : ""}>
        <ReactCountryFlag
          countryCode="GB"
          svg
          style={{
            width: "2rem",
            height: "1.8rem",
          }}
          title="English"
        />
      </StyledLink>
    </LangSwitcherWrapper>
  )
}

export default LanguageSwitcher
