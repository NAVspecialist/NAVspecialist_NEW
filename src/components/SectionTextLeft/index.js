import React from "react"
import PropTypes from "prop-types"
import { useInView } from "react-hook-inview"
import BackgroundImage from "../BackgroundImage"

import "../SectionContent/Section.scss"

const SectionTextLeft = ({ children, image, onEnterViewport, onLeaveViewport }) => {
  const [ref] = useInView(
    {
      onEnter: () => onEnterViewport(),
      onLeave: () => onLeaveViewport(),
    },
    [""]
  )

  return (
    <div className="page-section" ref={ref}>
      <div className="page-section__left page-section__left--white">{children}</div>
      <div className="page-section__right page-section__right--image">
        <BackgroundImage src={image} noMargin />
      </div>
    </div>
  )
}

SectionTextLeft.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  image: PropTypes.object.isRequired,
  onEnterViewport: PropTypes.func.isRequired,
  onLeaveViewport: PropTypes.func.isRequired,
}

export default SectionTextLeft
