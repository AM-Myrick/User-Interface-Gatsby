import React from 'react'
import Navigation from "../components/nav";
import TabNavigator from "../components/tabNavigator"

export default class ServicesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: "1"
        };
      }

      selectTab = (e) => {
        e.preventDefault();
        this.setState({ selected: [e.target.name]})
      }

      render() {
        return (
            <div>
                <Navigation />

                <div class="serv-jumbotron">
                    <img src="./img/services/services-jumbo1.jpg" alt="services jumbotron" class="desktop" />
                    <img src="./img/services/services-jumbo.jpg" alt="mobile services jumbotron" class="mobile" />
                    <div class="serv-img-text">
                        <h1>Services</h1>
                    </div>
                </div>

                <div class="serv-container">
                    <p>Services include: completely synergize resource taxing relationships via premier niche markets. Professionally
                        cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for
                        state of the art customer service.</p>
                </div>

                <TabNavigator />

                <footer>
                    <div class="footer-content">
                        <div class="footer-left">
                            <h2>Interested in starting a project? </h2>
                            <h2>Let’s talk:</h2>

                            <input type="text" placeholder="Enter email" />

                            <p>We'll never share your email with anyone else.</p>
                        </div>

                        <div class="footer-right">
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
                    <div class="copyright">
                        <p>Copyright © 2018 Smith and Jones</p>
                    </div>
                </footer>
            </div>
        )
      }
}