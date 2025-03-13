import Logo from "../images/logo_dark.inline.svg"
import styled from "styled-components"

export const PageLogo = styled(Logo)`
  cursor: pointer;
  width: 100%;
`

export const FooterText = styled.div`
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.4;
  max-width: 350px;

  p {
    margin-bottom: 0.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: none;
    padding: 2rem 0;
  }
`
