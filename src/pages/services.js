import React from 'react';
import { fluidImage } from "./index";
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet";
import Navigation from "../components/nav";
import Footer from "../components/footer";
import TabNavigator from "../components/tabNavigator"
import '../components/layout.css'

const ServicesPage = (props) => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" name="Description" content="Prestigious architecture firm for small and large businesses." />
                <title>Services - Smith & Jones Architects</title>
                <link rel="canonical" href="https://s-j-architects.netlify.com/services" />
            </Helmet>
            <Navigation />

            <div className="serv-jumbotron">
                <Img alt="services jumbotron" fluid={props.data.servicesJumbotron.childImageSharp.fluid} className="desktop"/>
                <Img alt="mobile services jumbotron" fluid={props.data.mobileServicesJumbotron.childImageSharp.fluid} className="mobile"/>
                <div className="serv-img-text">
                    <h1>Services</h1>
                </div>
            </div>

            <div className="serv-container">
                <p>Services include: completely synergize resource taxing relationships via premier niche markets. Professionally
                    cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for
                    state of the art customer service.</p>
            </div>

            <TabNavigator props={props} />

            <Footer />
        </div>
    )
}

export default ServicesPage;

export const servicesQuery = graphql`
  query {
    servicesJumbotron: file(relativePath: { eq: "services/services-jumbo1.jpg" }) {
      ...fluidImage
    }
    mobileServicesJumbotron: file(relativePath: { eq: "services/services-jumbo.jpg" }) {
      ...fluidImage
    }
    preConstructionImage: file(relativePath: { eq: "services/services-tab-pre-construction-img.png" }) {
        ...fluidImage
    }
    preConstructionMobile: file(relativePath: { eq: "services/services-tab-mobile-pre-construction-img.png" }) {
        ...fluidImage
    }
    constructionImage: file(relativePath: { eq: "services/services-tab-construction-img.png" }) {
        ...fluidImage
    }
    constructionMobile: file(relativePath: { eq: "services/services-tab-mobile-construction-img.png" }) {
        ...fluidImage
    }
    designBuildImage: file(relativePath: { eq: "services/services-tab-design-build-img.png" }) {
        ...fluidImage
    }
    designBuildMobile: file(relativePath: { eq: "services/services-tab-mobile-design-build-img.png" }) {
        ...fluidImage
    }
    sustainabilityImage: file(relativePath: { eq: "services/services-tab-sustainability-img.png" }) {
        ...fluidImage
    }
    sustainabilityMobile: file(relativePath: { eq: "services/services-tab-mobile-sustainability-img.png" }) {
        ...fluidImage
    }
}
`;