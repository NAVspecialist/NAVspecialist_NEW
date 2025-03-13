import React, { useState } from "react"
import cn from "classnames"
import { useInViewEffect } from "react-hook-inview"

import "./SignOff.scss"

const SignOff = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  const ref = useInViewEffect(
    ([entry], observer) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
      }
      setIsVisible(entry.isIntersecting)
    },
    { threshold: 0.5 }
  )

  return (
    <div
      ref={ref}
      className={cn("signoff", {
        inview: isVisible,
      })}
    >
      {children}
    </div>
  )
}

export default SignOff
