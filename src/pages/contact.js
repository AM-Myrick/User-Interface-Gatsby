import React from 'react'
import { Link } from 'gatsby'
import Navigation from "../components/nav";
import Footer from "../components/footer";
import Img from 'gatsby-image';
import '../components/layout.css'

const ContactPage = (props) => (
  <div>
	  <Navigation />
    <div className="cu-jumbotron">
      <Img alt="contact jumbotron" fluid={props.data.contactJumbotron.childImageSharp.fluid} className="desktop"/>
      <Img alt="mobile contact jumbotron" fluid={props.data.mobileContactJumbotron.childImageSharp.fluid} className="mobile" />
      <div className="cu-img-text">
        <h1>Contact Us</h1>
      </div>
    </div>

    <div className="cu-container">
      <div className="left">
        <h2>Get In Touch</h2>
    
        <p>Email Address</p>
        <input type="text" placeholder="Enter Email" />	
        <h6>We'll never share your email with anyone else.</h6>
    
        <p>How many buildings do you need planned?</p>
        <input type="number" value="1" min="1" max="5" className="num" />
    
        <p>Provide a brief overview of your project needs:</p>
        <textarea>
        </textarea>

        <div className="radio-opts">
          <label><input type="radio" name="business-need" label="I am a small business" value="small-business" />
          I am a small business<br /></label>
          <label><input type="radio" name="business-need" label="I am a residential owner" value="residential" />
          I am a residential owner<br /></label>
          <label><input type="radio" name="business-need" label="I am a corporation" value="corp" />
          I am a corporation</label>
        </div>
        <Link to="#">Submit</Link>
      </div>
      <aside className="right">
        <h2>Where We Work</h2>

        <div>
          <h3>New York</h3>
          <p>
            123 Lane<br />
            Suite 100<br />
            Albany, NY 12345<br />
            202 555 0144
          </p>
        </div>

        <div>
          <h3>Florida</h3>
          <p>
            Ocean Drive<br />
            Suite 201<br />
            Orlando, FL 22345<br />
            502 555 0144
          </p>
        </div>

        <div>
          <h3>California</h3>
          <p>
            Mountain Street<br />
            Suite 105<br />
            San Diego, CA 22345<br />
            702 555 0144
          </p>
        </div>
      </aside>
    </div>

  <Footer />
</div>
)

export default ContactPage;

export const indexQuery = graphql`
  query {
    contactJumbotron: file(relativePath: { eq: "contact/contact-jumbo1.jpg" }) {
      ...fluidImage
    }
    mobileContactJumbotron: file(relativePath: { eq: "contact/contact-jumbo.jpg" }) {
      ...fluidImage
    }
  }
`;