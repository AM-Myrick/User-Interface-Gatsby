import React from 'react'
import { Link, graphql } from 'gatsby'
import { Helmet } from "react-helmet";
import Navigation from "../components/nav"
import Footer from "../components/footer"
import Img from 'gatsby-image'
import '../components/layout.css'

const IndexPage = (props) => {
  return (
      <div>
        <Helmet>
          <meta charSet="utf-8" name="Description" content="Prestigious architecture firm for small and large businesses." />
          <title>Home - Smith & Jones Architects</title>
          <link rel="canonical" href="https://s-j-architects.netlify.com/" />
        </Helmet>
        <Navigation/>
        <div className="jumbotron">
          <Img alt="incredible building" fluid={props.data.jumbotron.childImageSharp.fluid} className="desktop"/>
          <Img alt="mobile jumbotron" fluid={props.data.mobileJumbotron.childImageSharp.fluid} className="mobile" />
          <div className="img-text">
            <h1>Integrity</h1>
            <h1>Excellence</h1>
            <h1>Progress.</h1>
          </div>
        </div>

        <div className="container">
          <section className="intro-content-top">
            <div className="top-left">
              <h2>Smith & Jones Architects</h2>
              <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer
                sed. Duo etiam laboramus dissentiet in, nec no errem </p>
              <Link to="#">Learn More</Link>
            </div>
            <div className="top-right">
              <Img alt="sketch close-up" fluid={props.data.sketch.childImageSharp.fluid} className="desktop"/>
              <Img alt="sketch mobile-view" fluid={props.data.mobileSketch.childImageSharp.fluid} className="mobile"/>

            </div>
          </section>

          <section className="intro-content-bottom">
            <div className="bottom-right">
              <h2>Futuristic Designs</h2>
              <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer
                sed. Duo etiam laboramus dissentiet in, nec no errem </p>
              <Link to="#">View Designs</Link>
            </div>
            <div className="bottom-left">
              <Img alt="long buildings" fluid={props.data.buildings.childImageSharp.fluid} className="desktop"/>
              <Img alt="long buildings mobile-view" fluid={props.data.mobileBuildings.childImageSharp.fluid} className="mobile"/>

            </div>
          </section>

          <section className="recent-top">
            <h2>Recent Projects</h2>
            <Img alt="Villas desktop-view" fluid={props.data.villas.childImageSharp.fluid} className="desktop"/>
            <Img alt="Villas mobile-view" fluid={props.data.mobileVillas.childImageSharp.fluid} className="mobile"/>
            <div className="greybg-top">
              <h3>THE VILLAS</h3>
            </div>
            <p>The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
              going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud
              solution.<br /><br />
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital
              divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close
              the loop on focusing solely on the bottom line.</p>
          </section>

          <section className="recent-mid">
            <Img alt="Outskirts" fluid={props.data.outskirts.childImageSharp.fluid} className="desktop"/>
            <Img alt="Outskirts mobile" fluid={props.data.mobileOutskirts.childImageSharp.fluid} className="mobile"/>
            <div className="greybg-mid">
              <h3>OUTSKIRTS</h3>
            </div>
            <p>The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of
              the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a
              streamlined cloud solution.<br /><br />
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital
              divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close
              the loop on focusing solely on the bottom line.</p>
          </section>
          <section className="recent-bottom">
            <Img alt="The Blocks" fluid={props.data.blocks.childImageSharp.fluid} className="desktop"/>
            <Img alt="The Blocks mobile" fluid={props.data.mobileBlocks.childImageSharp.fluid} className="mobile"/>

            <div className="greybg-bottom">
              <h3>THE BLOCKS</h3>
            </div>
            <p>The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the
              day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined
              cloud solution.<br /><br />
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital
              divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close
              the loop on focusing solely on the bottom line.</p>
          </section>
        </div>
      <Footer />
    </div>
  )
}
export default IndexPage;

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 2000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const indexQuery = graphql`
  query {
    jumbotron: file(relativePath: { eq: "home/buildings-edit.jpg" }) {
      ...fluidImage
    }
    mobileJumbotron: file(relativePath: { eq: "home/buildings.jpg" }) {
      ...fluidImage
    }
    sketch: file(relativePath: { eq: "home/home-img-1.png" }) {
      ...fluidImage
    }
    mobileSketch: file(relativePath: { eq: "home/home-mobile-img-1.png" }) {
      ...fluidImage
    }
    buildings: file(relativePath: { eq: "home/home-img-2.png" }) {
      ...fluidImage
    }
    mobileBuildings: file(relativePath: { eq: "home/home-mobile-img-2.png" }) {
      ...fluidImage
    }
    villas: file(relativePath: { eq: "home/home-villas-img.png" }) {
      ...fluidImage
    }
    mobileVillas: file(relativePath: { eq: "home/home-mobile-villas-img.png" }) {
      ...fluidImage
    }
    outskirts: file(relativePath: { eq: "home/home-outskirts-img.png" }) {
      ...fluidImage
    }
    mobileOutskirts: file(relativePath: { eq: "home/home-mobile-outskirts-img.png" }) {
      ...fluidImage
    }
    blocks: file(relativePath: { eq: "home/home-the-blocks-img.png" }) {
      ...fluidImage
    }
    mobileBlocks: file(relativePath: { eq: "home/home-mobile-the-blocks-img.png" }) {
      ...fluidImage
    }
  }
`;