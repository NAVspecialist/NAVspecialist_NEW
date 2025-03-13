/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// ES5 way
// exports.onClientEntry = () => {
// ES6 way

export const onClientEntry = () => {
  if (!(`IntersectionObserver` in window)) {
    require(`intersection-observer`)
    window.console.log(`# IntersectionObserver is polyfilled!`)
  }
}
