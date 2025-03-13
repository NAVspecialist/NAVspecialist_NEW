import { useStaticQuery, graphql } from "gatsby"

export const useSignOffContent = lang => {
  const data = useStaticQuery(graphql`
    query AllSignOffContent {
      signoffDaJson {
        text
      }
      signoffEnJson {
        text
      }
    }
  `)
  return lang === "danish" ? data.signoffDaJson : data.signoffEnJson
}
