import { useStaticQuery, graphql } from "gatsby"

export const useFooterContent = lang => {
  const data = useStaticQuery(graphql`
    query AllFooterContent {
      footerEnJson {
        kontakt {
          address
          city
          cvr
          name
          postcode
          email
        }
      }
      footerDaJson {
        kontakt {
          address
          city
          cvr
          postcode
          name
          email
        }
      }
    }
  `)
  return lang === "danish" ? data.footerDaJson : data.footerEnJson
}
