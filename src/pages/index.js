import React, {Component} from 'react'
import { Link } from 'gatsby'
import Navigation from "../components/nav"
import jumbotron from "../img/home/buildings-edit.jpg"
import mobileJumbotron from "../img/home/buildings.jpg"
import sketch from "../img/home/home-img-1.png"
import mobileSketch from "../img/home/home-mobile-img-1.png"
import buildings from "../img/home/home-img-2.png"
import mobileBuildings from "../img/home/home-mobile-img-2.png"
import villas from "../img/home/home-villas-img.png"
import mobileVillas from "../img/home/home-mobile-villas-img.png"
import outskirts from "../img/home/home-outskirts-img.png"
import mobileOutskirts from "../img/home/home-mobile-outskirts-img.png"
import blocks from "../img/home/home-the-blocks-img.png"
import mobileBlocks from "../img/home/home-mobile-the-blocks-img.png"
import '../components/layout.css'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
      <Navigation/>
      {/* <!-- Home Page Content: --> */}
      <div className="jumbotron">
        <img src={jumbotron} alt="incredible building" className="desktop"/>
        <img src={mobileJumbotron} alt="mobile jumbotron" className="mobile"/>
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
            <img src={sketch} alt="sketch close-up" className="desktop"/>
            <img src={mobileSketch} alt="sketch mobile-view" className="mobile"/>

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
            <img src={buildings} alt="long buildings" className="desktop"/>
            <img src={mobileBuildings} alt="long buildings mobile-view" className="mobile"/>

          </div>
        </section>

        <section className="recent-top">
          <h2>Recent Projects</h2>
          <img src={villas} alt="Villas desktop-view" className="desktop"/>
          <img src={mobileVillas} alt="Villas mobile-view" className="mobile"/>
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
          <img src={outskirts} alt="Outskirts" className="desktop"/>
          <img src={mobileOutskirts} alt="Outskirts mobile" className="mobile"/>
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
          <img src={blocks} alt="The Blocks" className="desktop"/>
          <img src={mobileBlocks} alt="The Blocks mobile" className="mobile"/>

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

      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <h2>Interested in starting a project? </h2>
            <h2>Let’s talk:</h2>

            <input type="text" placeholder="Enter email" />

            <p>We'll never share your email with anyone else.</p>
          </div>

          <div className="footer-right">
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
          </div>
        </div>
        <div className="copyright">
          <p>Copyright © 2018 Smith and Jones</p>
        </div>
      </footer>
    </div>
    )
  }
}
export default IndexPage