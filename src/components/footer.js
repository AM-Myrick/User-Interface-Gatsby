import React from 'react';
import './layout.css';

const Footer = (props) => {
    return(
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
    )
}

export default Footer;