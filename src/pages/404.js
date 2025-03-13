import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import { useFooterContent } from "../hooks/use-footer"

const lang = "danish"

const NotFoundPage = () => {
  const footerContent = useFooterContent(lang)
  return (
    <Layout lang={lang} footerContent={footerContent}>
      <SEO title="404: Not found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage
