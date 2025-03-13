import React from "react"
import PropTypes from "prop-types"
import slugify from "slugify"

const ScrollSection = ({ name, children }) => {
  return (
    <section
      id={slugify(name, {
        replacement: "-", // replace spaces with replacement
        remove: null, // regex to remove characters
        lower: true, // result in lower case
      })}
    >
      {children}
    </section>
  )
}

ScrollSection.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default ScrollSection
