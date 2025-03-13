import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"

import "./Textbox.scss"

const Textbox = ({ children, padded, white }) => {
  return (
    <div
      className={cn("textbox", {
        "textbox--padded-top": padded,
        "textbox--white": white,
      })}
    >
      <div className="textbox__inner">{children}</div>
    </div>
  )
}

Textbox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Textbox
