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
  display: block;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 2000px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const lang = "danish"
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
              Lad os gå direkte til biddet. Vi kombinerer dybdegående produktviden med årelang
              praktisk erfaring og kan derfor hjælpe ambitiøse Microsoft partnere med at få de
              fornødne NAV2018/DYN365BC kompetencer i hus, så de også i fremtiden vil være i stand
              til at fastholde og tiltrække nye kunder - og samtidigt tjene penge.
            </p>
            <p>
              Vi er med andre ord ikke bare alvidende produktnørder, men forstår hvordan I får værdi
              ud af både produktet og af os som samarbejdspartner. Vi er fleksible, tilgængelige og
              prisbevidste på jeres vegne. Det betyder, at I får meget ud af hver krone, samt at vi
              både kan hjælpe i længere perioder, eller hvis I kortvarigt står og mangler en
              professionel ressource.
            </p>
            <p>
              <b>
                Ring på 25159909 (Palle) eller 21276751 (Marianne) og hør om vi også kan skabe værdi
                for dig
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
              Vi har brugt produktet, siden det kom på markedet og ved derfor af egen erfaring,
              hvordan det giver mest værdi for virksomheden, processerne og medarbejderne. Helt
              konkret kan vi udvikle og tilpasse produktet til jeres behov, samt uddanne jer i at få
              mest muligt ud af det.
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
              Der findes mange forskellige versioner af Microsoft Dynamics NAV, under forskellige
              navne som Navigator, Navision Financials, Navision Attain og Dynamics 365 Business
              Central. Oveni frigiver Microsoft en række opdateringer til den enkelte version hver
              måned.
            </p>
            <p>
              Det gør det svært at vurdere hvornår, hvordan og til hvad, man skal opgradere. Det
              kræver overblik og erfaring. Og den har din NAVspecialist. Vi kan derfor svare både
              specifikt og præcist på dine spørgsmål i den henseende.
            </p>
          </Textbox>
        </SectionContent>
        <SectionContent titleWhite={titles[4].titleWhite} titleBlue={titles[4].titleBlue}>
          <Textbox padded>
            <p>
              Er der noget værre end at betale for mere, end man får? Svaret er nej. Det handler med
              andre ord om at få mest muligt ud af sin løsning.
            </p>
            <p>
              I den forbindelse bør vi nævne, at vi har lang erfaring med at implementere og
              optimere processer, hvilket gør os i stand til at identificere udfordringer og
              problemstillinger og ikke mindst finde frem til brugbare og gennemtænkte løsninger.
            </p>
            <p>
              Har du desuden brug for assistance ud over den daglige bogføring, leder du heller ikke
              forgæves her. Vi har nemlig praktisk erfaring inden for økonomistyring. Herunder
              budgettering, rapportering, samt klargøring af materiale til revisor.
            </p>
            <p>
              Erfaringen har vi fra både mindre og større virksomheder og kan derfor hurtigt sætte
              os ind i din virksomheds data og arbejdsmetoder. Vi er kort og godt i stand til at
              hjælpe dig med at bruge din løsning optimalt og få mest muligt ud af den.
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
              Du bliver kun tilfreds, hvis alt går som aftalt. For ethvert projekts succes måles
              nemlig på evnen til at levere den ønskede løsning til den rette pris, funktionalitet
              og aftalt tid. Og det er her, vi perfekt timet kommer ind i billedet.
            </p>
            <p>
              For vi kan være din projektleder og sparringspartner, og vi kan være bindeleddet
              mellem din virksomhed og en Dynamics partner.
            </p>
            <p>
              Det tør vi love, fordi vi har stor erfaring med udarbejdelse af kravspecifikationer,
              opsætning, test og datakontrol efter f.eks. en konvertering, og vi er vant til at
              arbejde efter projektmetoder som Microsoft Sure Step, Prince2 og SCRUM.
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
              Det går galt, hvis man ryster bare en smule på hånden. For en standard Dynamics 365
              BC-løsning består af mere end 5,800 objekter og 500,000 linjer kode, og laver man en
              ændring til bare et objekt, kan det få en betydning for flere områder i løsningen.
            </p>
            <p>
              Det kræver altså godt kendskab til, og overblik over, produktet. Og det har vi. I al
              beskedenhed. Derfor ryster vi aldrig på hånden og kan hjælpe med at tilpasse løsningen
              hurtigt og rigtigt.
            </p>
            <p>
              Og det er ikke det eneste, vi kan hjælpe med. Dynamics NAV og Dynamics 365 BC har to
              forskellige udviklingsmiljøer, og vi kender dem begge to. Vil du derfor lære at kode i
              det nye programmeringssprog AL og Extensions ved hjælp af Visual Studio Code, bruge
              Github, Azure DevOps til at styre og kvalitetssikre din udvikling, kan vi også hjælpe
              dig med det.
            </p>
            <p>
              Er du endnu ikke klar til Dynamics 365 BC, men stadigvæk gerne vil udvikle i Dynamics
              NAV 201x ved hjælp af C/Side, så kan vi også hjælpe med det.
            </p>
            <p>
              Der er med andre ord ikke noget, vi ikke kan hjælpe med i denne forbindelse. Alle vore
              kurser kan afholdes som lukkede og specialtilpassede undervisningsforløb.
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
              Vi er en lille virksomhed, men vi har haft mange i skole. Vi har uddannet og
              certificeret mere end 1000 personer verden over for bl.a. Microsoft, kursuscentre og
              direkte hos og for store Dynamics Partnere.
            </p>
            <p>
              Vi underviser i alle områder af Dynamics 365 BC. Hvad enten det er grundlæggende
              Finans, Anlægsaktiver, Køb, Salg, Lagerstyring, Service, Sag eller alle de øvrige
              moduler. Vi kan også undervise i grundlæggende regnskab. Så hvis du har brug for
              undervisning og træning, ved du nu, at vi hedder det, vi kan.
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
              Vi har hvert vores speciale inden for Dynamics. Og tilsammen er vi specialister i alt
              inden for Dynamics. Det lyder måske for godt til at være sandt, men det er det nu
              ikke. For vi har arbejdet så længe med NAV2018/DYN365BC, at vi kender produktet til
              bunds. Både i bredden og i dybden. Og fra start til slut.
            </p>
          </Textbox>
        </SectionContent>
        <SectionContent titleWhite={titles[9].titleWhite} titleBlue={titles[9].titleBlue}>
          <Textbox padded>
            <p>
              Hvordan gør man en lang, og potentielt kedelig, historie kort? Ved at komme direkte
              til pointen. Eller pointerne. Det er det, vi har forsøgt her, så tilgiv den manglende
              lyrik og musik i sproget, for nu bliver det kort, kontant og præcist.
            </p>
          </Textbox>
          <Seperator height={isMobile ? "0rem" : "2rem"} />
          <TwoColumns>
            <Person
              name="Palle"
              title="Ejer og NAVspecialist"
              image={data.image4.childImageSharp.fluid}
              type="left"
            >
              <p>
                Hvor skal jeg starte? Fra starten. Siden 1985 har jeg arbejdet i ERP-branchen som
                projektleder, underviser, forretningskonsulent og udvikler på mere end 1000
                implementeringer.
              </p>
              <p>
                Min største interesse er at rådgive virksomheder i udvikling og korrekt brug af
                Dynamics NAV og 365 BC. Som Microsoft Certified Trainer (MCT) bliver jeg ofte brugt
                som instruktør og foredragsholder verden over.
              </p>
              <p>
                Når jeg ikke arbejder, så er jeg en passioneret løber med +100 Marathon på kontoen
                hvilket betyder, at jeg kan sætte mig et mål og nå det. Også når det bliver svært.
              </p>
              <p>
                Desuden brænder jeg for: Visual Studio Code, DevOps og Git – lidt nørd har man jo
                lov at være.
              </p>
            </Person>
            <Person
              name="Marianne"
              title="Ejer og NAVspecialist"
              image={data.image2.childImageSharp.fluid}
              type="right"
            >
              <p>
                Mine styrker? De kommer her. Jeg er faglig stærk indenfor regnskab og økonomiområdet
                og har praktisk erfaring med økonomistyring, budgettering og rapportering fra flere
                større danske virksomheder gennem de sidste 30 år.
              </p>
              <p>
                Min interesse for og erfaring med at opsætte, implementere og optimere processer i
                Dynamics NAV og 365 BC gør mig i stand til at identificere udfordringer og
                problemstillinger, og ikke mindst finde frem til brugbare løsninger.
              </p>
              <p>
                Jeg har også prøvet kræfter med lønområdet. Både i praksis som lønchef og med
                outsourcing. Jeg når mine mål og overholder fastsatte deadlines - det gør jeg, fordi
                jeg er fagligt dygtig, struktureret og i stand til at planlægge og prioritere tid og
                opgaver. 
              </p>
              <p>Også er jeg en del sjovere, end jeg lyder, når man læser ovenstående.</p>
            </Person>
          </TwoColumns>
        </SectionContent>
        {testimonial && (
          <SectionContent titleWhite={titles[10].titleWhite} titleBlue={titles[10].titleBlue}>
            <Textbox padded>
              <p>
                Det er jo nemt og uforpligtende at skrive pænt om sig selv, så her giver vi ordet
                til vores kunder, så du kan se om du kan stole på det, vi selv siger. I samme moment
                vil vi dog ikke undlade at nævne, at vi af og til bliver hyret af vores
                konkurrenter, til at løse de opgaver de ikke selv kan overkomme. Just saying.
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
