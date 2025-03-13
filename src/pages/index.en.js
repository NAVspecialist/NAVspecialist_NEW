import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { isMobile } from "react-device-detect"
import { useSiteTitles } from "../hooks/use-site-titles"
import { useFooterContent } from "../hooks/use-footer"
import { useSignOffContent } from "../hooks/use-sign-off"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

import Intro from "../components/Intro"
import ScrollSection from "../components/ScrollSection"
import SectionContent from "../components/SectionContent"
import SectionTextLeft from "../components/SectionTextLeft"
import Textbox from "../components/Textbox"
import BackgroundImage from "../components/BackgroundImage"
import Person from "../components/Person"
import Seperator from "../components/Seperator"

const TwoColumns = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 2000px) {
    flex-direction: column-reverse;
  }
`

const lang = "english"
const testimonial = false

const IndexPage = ({ data }) => {
  const [introInViewport, setIntroInViewport] = useState(true)
  const [kontaktInViewport, setKontaktInViewport] = useState(false)
  const titles = useSiteTitles(lang)
  const footerContent = useFooterContent(lang)
  const signOffContent = useSignOffContent(lang)

  return (
    <Layout
      data={data}
      lang={lang}
      introInViewport={introInViewport}
      kontaktInViewport={kontaktInViewport}
      titles={titles}
      footerContent={footerContent}
    >
      <SEO title="Navspecialist" />
      <ScrollSection name={titles[0].title}>
        <Intro
          titleWhite={titles[0].titleWhite}
          titleBlue={titles[0].titleBlue}
          full
          onEnterViewport={() => setIntroInViewport(true)}
          onLeaveViewport={() => setIntroInViewport(false)}
        />
        <SectionContent
          title={titles[0].title}
          titleWhite={titles[1].titleWhite}
          titleBlue={titles[1].titleBlue}
          quarter
        >
          <Textbox padded>
            <p>
              Let’s get down to business. We combine detailed knowledge of the product with
              year-long practical experience. This allows us to help ambitious Microsoft partners
              attain the required competencies in regards to NAV2017/DYN365BC. Ultimately, ensuring
              our clients’ capacity to sustain and attract new clients - while making money.
            </p>
            <p>
              In other words, we ensure that you benefit from our collaboration while securing an
              increase in product value. We are flexible, accessible and price-conscious on your
              behalf. Consequently, we are able to accommodate you as a professional resource over a
              long period of time or short-term.
            </p>
            <p>
              <b>
                Call us and see if we can help you +45 25159909 (Palle) or +45 21276751 (Marianne)
              </b>
            </p>
          </Textbox>
        </SectionContent>
      </ScrollSection>
      <ScrollSection name={titles[2].title}>
        <SectionContent
          title={titles[2].title}
          titleWhite={titles[2].titleWhite}
          titleBlue={titles[2].titleBlue}
          quarter
        >
          <BackgroundImage src={data.image1.childImageSharp.fluid} />
          <Textbox padded>
            <p>
              We have been utilizing the product since it was launched. Consequently, we have
              attained extensive hands-on experience with the product. This allows us to ensure
              top-level value for your company. Specifically, we can develop and adapt the product
              to your needs, as well as educate you to provide you with the ability to utilize the
              product.
            </p>
          </Textbox>
        </SectionContent>
      </ScrollSection>
      <ScrollSection name={titles[3].title}>
        <SectionContent
          title={titles[3].title}
          titleWhite={titles[3].titleWhite}
          titleBlue={titles[3].titleBlue}
        >
          <Textbox padded>
            <p>
              There are many versions of Microsoft Dynamics NAV, under different names like
              Navigator, Navision Financials, Navision Attain, and Dynamics 365 Business Central. In
              addition, Microsoft releases a number of updates within each version every month.
            </p>
            <p>
              It makes it difficult to assess when, how and to what to upgrade. It requires an
              overview of your solution as well as experience. We provide both, and as such we can
              answer your questions accurately and explicitly.
            </p>
          </Textbox>
        </SectionContent>
        <SectionContent titleWhite={titles[4].titleWhite} titleBlue={titles[4].titleBlue}>
          <Textbox padded>
            <p>
              Is there anything worse than paying for more than you get? The answer is no. In other
              words, it's important to acquire maximum value from the solution.
            </p>
            <p>
              In this context, we should mention that we have extensive experience with implementing
              and optimizing processes, which enable us to identify challenges and problems as well
              as finding functional and intelligent solutions.
            </p>
            <p>
              Furthermore, we are proficient in the field of financial management. We are equipped
              to assist you with budgeting, reporting, and preparation of material for the auditor.
            </p>
            <p>
              Our competencies are the result of many years of practical experience from working
              with both small and large companies. Consequently, we are able to understand your
              company’s data and methods quickly. In short, we can help you gain maximal value from
              your solution.
            </p>
          </Textbox>
        </SectionContent>
      </ScrollSection>
      <ScrollSection name={titles[5].title}>
        <SectionContent
          title={titles[5].title}
          titleWhite={titles[5].titleWhite}
          titleBlue={titles[5].titleBlue}
        >
          <Textbox padded>
            <p>
              Your satisfaction is dependent on everything going according to plan. The measure of
              success in any project is based upon the ability to deliver the desired solution in
              accordance with price, functionality, and time-scope. This is where we come in.
            </p>
            <p>
              We have considerable experience creating requirements, specifications, setups,
              testing, data control in connection with a conversion, etc. Additionally, we are
              accustomed to methods like Microsoft Sure Step, Prince2 and SCRUM.
            </p>
            <p>
              As a result, we can perform the role of the project manager as well as a sparring
              partner. Moreover, we can carry the role of the link between your company and Dynamics
              partner.
            </p>
          </Textbox>
        </SectionContent>
      </ScrollSection>
      <ScrollSection name={titles[6].title}>
        <SectionContent
          title={titles[6].title}
          titleWhite={titles[6].titleWhite}
          titleBlue={titles[6].titleBlue}
        >
          <Textbox padded>
            <p>
              It’s important to be confident. A standard Dynamic 365 BC-solution consists of more
              than 5,800 objects and 500,000 lines of code. In essence, creating a change in just
              one object can affect multiple areas within the solution.
            </p>
            <p>
              As such it requires a high level of familiarity and understanding of the product.
              Which we have. We can measure the weight of our responsibility and adapt the solution
              quickly and accurately. Dynamics NAV and Dynamics 365 engage two different development
              environments and we are intimate with both.
            </p>
            <p>
              In addition, we can teach you how to develop in the new programming language AL and
              Extensions utilizing Visual Studio Code and apply Github or Azure DevOps, in order to
              manage and quality assess your development. If you prefer to continue developing using
              Dynamics NAV 201x applying C/Side, we can assist with that as well.
            </p>
            <p>
              It is important to note that all our courses can be appropriated in a closed and
              customized manner.
            </p>
          </Textbox>
        </SectionContent>
      </ScrollSection>
      <ScrollSection name={titles[7].title}>
        <SectionContent
          title={titles[7].title}
          titleWhite={titles[7].titleWhite}
          titleBlue={titles[7].titleBlue}
        >
          <Textbox padded>
            <p>
              We are a small business, but we have educated many. We have trained and certified more
              than 1000 people around the world including Microsoft employees and experienced
              Dynamics Partners.
            </p>
            <p>
              We educate within all areas of Dynamics 365 BC, whether it is Finance, Fixed Assets,
              Purchase, Sales, Inventory Management, Service, Case etc. We can also teach basic
              accounting. So, if you need teaching or training, you now know that we are
              NAVspecialist.
            </p>
          </Textbox>
        </SectionContent>
      </ScrollSection>
      <ScrollSection name={titles[8].title}>
        <SectionContent
          title={titles[8].title}
          titleWhite={titles[8].titleWhite}
          titleBlue={titles[8].titleBlue}
        >
          <BackgroundImage src={data.image3.childImageSharp.fluid} />
          <Textbox padded>
            <p>
              We each have our specialties within Dynamics. And together we are two specialists that
              embrace every aspect of Dynamics. It might seem too good to be true, but it is not. We
              have been working with NAV2018/DYN365BC for a long time, consequently, we attain an
              in-depth knowledge of the product.
            </p>
          </Textbox>
        </SectionContent>
        <SectionContent titleWhite={titles[9].titleWhite} titleBlue={titles[9].titleBlue}>
          <Textbox padded>
            <p>
              How do you make a long story short? You get to the point. This is what we have done in
              this paragraph. This will be short, straightforward, and accurate.
            </p>
          </Textbox>
          <Seperator height={isMobile ? "0rem" : "2rem"} />
          <TwoColumns>
            <Person
              name="Palle"
              title="Owner and NAVspecialist"
              image={data.image4.childImageSharp.fluid}
              type="left"
            >
              <p>
                Where should I begin? I have been working in the ERP-business as a project manager,
                instructor, business consultant and developer since 1985, ultimately being a part of
                more than 1000 implementations.
              </p>
              <p>
                My greatest interest is to advise companies in the development and utilizing of
                Dynamic NAV and 365 BC. As a certified Microsoft Trainer (MCT) I’m often used as an
                instructor and trainer worldwide.
              </p>
              <p>
                When I’m not working, I’m a passionate runner. I have completed more than +100
                marathons, which proves I’m able to set a goal and achieve it. Even when it gets
                tough.
              </p>
              <p>
                Furthermore, I’m passionate about Visual Studio Code, DevOps and Git. Feel free to
                call me a bit of a geek. It will only make me proud.
              </p>
            </Person>
            <Person
              name="Marianne"
              title="Owner and NAVspecialist"
              image={data.image2.childImageSharp.fluid}
              type="right"
            >
              <p>
                My strengths? My strong capabilities cover accounting and economics. Over the past
                30 years, I have gained experience within financial management, budgeting and
                reporting by working for several major Danish companies.
              </p>
              <p>
                My interest in and experience with defining, implementing and optimizing processes
                in Dynamics NAV and 365 BC enables me to identify challenges/obstacles and problems.
                Furthermore, it enables me to find useful solutions.
              </p>
              <p>
                In addition, I have a background as a Compensation & Benefits manager as well as
                experience with outsourcing within this area. I reach my goals and comply with
                deadlines because I’m skilled, structured, and capable of planning and prioritizing
                time and assignments.
              </p>
              <p>Also, I'm a lot more fun than I sound when reading the above.</p>
            </Person>
          </TwoColumns>
        </SectionContent>
        {testimonial && (
          <SectionContent titleWhite={titles[10].titleWhite} titleBlue={titles[10].titleBlue}>
            <Textbox padded>
              <p>
                There is no obligation in writing nicely about oneself and so this paragraph is
                dedicated to the voice of our clients and competitors. However, we will not fail to
                mention the fact that we are sometimes hired by our competitors to solve the tasks
                they cannot do themselves. Just saying.
              </p>
            </Textbox>
          </SectionContent>
        )}
      </ScrollSection>
      <ScrollSection name={titles[11].title}>
        <SectionTextLeft
          image={data.image5.childImageSharp.fluid}
          onEnterViewport={() => setKontaktInViewport(true)}
          onLeaveViewport={() => setKontaktInViewport(false)}
        >
          <p>{signOffContent.text[0]}</p>
          <p>{signOffContent.text[1]}</p>
        </SectionTextLeft>
      </ScrollSection>
    </Layout>
  )
}

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "billede_1.jpg" }) {
      ...imageFragment
    }
    image2: file(relativePath: { eq: "billede_2.jpg" }) {
      ...imageFragment
    }
    image3: file(relativePath: { eq: "billede_3.jpg" }) {
      ...imageFragment
    }
    image4: file(relativePath: { eq: "billede_4.jpg" }) {
      ...imageFragment
    }
    image5: file(relativePath: { eq: "billede_5.jpg" }) {
      ...imageFragment
    }
  }
`

export default IndexPage
