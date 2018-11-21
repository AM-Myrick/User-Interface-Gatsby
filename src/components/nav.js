import React, {Component} from 'react'
import { Link } from 'gatsby'
import hamburger from "../img/nav-hamburger.png"
import closeHamburger from "../img/nav-hamburger-close.png"
import './layout.css'

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
      }
      toggleMenu = () => {
        this.setState({isActive: !this.state.isActive})
      }

    render() {
        return (
            this.state.isActive === false ?
            <header>
                <h1>S&J</h1>

                <nav className="navigation">
                <div className="menu menu-close animated fadeIn">
                </div>
                </nav>
                <div>
                <img className="menu-button" src={hamburger} alt="hamburger menu" onClick={this.toggleMenu}/>
                </div>
            </header> :
            <header>
            <h1>S&J</h1>

            <nav className="navigation expand">
            <div className="menu menu-close menu-open animated fadeIn">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/contact">Contact</Link>
            </div>
            </nav>
            <div>
            <img className="menu-button" src={closeHamburger} alt="hamburger menu" onClick={this.toggleMenu}/>
            </div>
        </header>
        )
    }
}

export default Navigation;
