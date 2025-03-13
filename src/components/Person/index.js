import React from "react"
import PropTypes from "prop-types"
import cn from "classnames"
import BackgroundImage from "../BackgroundImage"

import "./Person.scss"

const Person = ({ name, title, image, children, type = "left" }) => {
  return (
    <div className="person">
      <BackgroundImage src={image} />

      <div
        className={cn("person__inner", {
          "person__inner--left": type === "left",
          "person__inner--right": type === "right",
        })}
      >
        <div className="person__title">
          <h4>{name}</h4>
          <div className="person__title--sub">{title}</div>
        </div>
        <div className="person__content">{children}</div>
      </div>
    </div>
  )
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
}

export default Person
