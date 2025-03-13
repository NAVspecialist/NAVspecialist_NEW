/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import LanguageSwitcher from "../LanguageSwitcher"
import cn from "classnames"
import { slide as Menu } from "react-burger-menu"
import Footer from "../Footer"
import { isMobile } from "react-device-detect"
import { HamburgerSqueeze } from "react-animated-burgers"
import { Link, animateScroll as scroll } from "react-scroll"
import slugify from "slugify"
import { PageLogo } from "../../utils/globals"

import "./Layout.scss"

const Layout = ({ children, lang, introInViewport, kontaktInViewport, titles, footerContent }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div id="outer-container">
      <div
        className={cn("navigation", {
          "navigation--overlayed": !introInViewport,
        })}
      >
        <div className="navigation__left">
          <div className="navigation__logo">
            <PageLogo
              onClick={() => {
                scroll.scrollToTop()
              }}
            />
          </div>
          <HamburgerSqueeze
            buttonStyle={{ padding: "0", display: "block" }}
            className="navigation-burger"
            isActive={menuOpen}
            onClick={toggleMenu}
            buttonColor="transparent"
            barColor="white"
          />
        </div>
        <LanguageSwitcher currentLanguage={lang} />
      </div>
      <Menu
        htmlClassName={"prevent-scroll"}
        bodyClassName={"prevent-scroll"}
        pageWrapId={"page-wrap"}
        outerContainerId={"outer-container"}
        customCrossIcon={false}
        isOpen={menuOpen}
        width={"50%"}
        onStateChange={state => {
          setMenuOpen(state.isOpen)
        }}
        right
      >
        {titles &&
          titles.map(({ title }) => {
            if (title) {
              const slugTitle = slugify(title, {
                replacement: "-", // replace spaces with replacement
                remove: null, // regex to remove characters
                lower: true, // result in lower case
              })

              return (
                <Link
                  key={slugTitle}
                  activeClass="active"
                  className={cn("menu-link", {
                    active: kontaktInViewport && slugTitle === "kontakt-os",
                  })}
                  to={slugTitle}
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={isMobile ? -64 : 0}
                  duration={400}
                  delay={0.2}
                  isDynamic={true}
                  ignoreCancelEvents={true}
                  onSetActive={isMobile ? closeMenu : null}
                  onClick={closeMenu}
                >
                  {title}
                </Link>
              )
            }
          })}
      </Menu>
      <div className="page" id="page-wrap">
        <div className="page__foreground">
          <main>{children}</main>
        </div>
        <div className="page__background" />
      </div>
      <Footer>
        <div className="contact">
          <div className="contact__item">{footerContent.kontakt.name}</div>
          <div className="contact__item">{footerContent.kontakt.address}</div>
          <div className="contact__item">
            {footerContent.kontakt.postcode} {footerContent.kontakt.city}
          </div>
          <div className="contact__item">CVR: {footerContent.kontakt.cvr}</div>
          <div className="contact__item">{footerContent.kontakt.email}</div>
        </div>
      </Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
