import { useStaticQuery, graphql } from "gatsby"

export const useSiteTitles = lang => {
  const data = useStaticQuery(graphql`
    query AllPageTitles {
      allTitlesDaJson {
        nodes {
          title
          titleBlue
          titleWhite
        }
      }
      allTitlesEnJson {
        nodes {
          title
          titleBlue
          titleWhite
        }
      }
    }
  `)
  return lang === "danish" ? data.allTitlesDaJson.nodes : data.allTitlesEnJson.nodes
}
