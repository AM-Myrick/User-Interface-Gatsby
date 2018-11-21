import React from 'react'
import preConstructionImage from "../img/services/services-tab-pre-construction-img.png"
import preConstructionMobile from "../img/services/services-tab-mobile-pre-construction-img.png"
import constructionImage from "../img/services/services-tab-construction-img.png"
import constructionMobile from "../img/services/services-tab-mobile-construction-img.png"
import designBuildImage from "../img/services/services-tab-design-build-img.png"
import designBuildMobile from "../img/services/services-tab-mobile-design-build-img.png"
import sustainabilityImage from "../img/services/services-tab-sustainability-img.png"
import sustainabilityMobile from "../img/services/services-tab-mobile-sustainability-img.png"
import './layout.css'

export default class TabNavigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preConstruction: false,
            construction: false,
            designBuild: false,
            sustainability: false
        };
      }

      componentDidMount() {
          this.setState({preConstruction: true})
      }
      

      selectTab = (e) => {
        e.preventDefault();
        this.setState({preConstruction: false})
        this.setState({construction: false})
        this.setState({designBuild: false})
        this.setState({sustainability: false})
        this.setState({[e.target.id]: true });
      }

      render() {
        return (
            this.state.preConstruction === true ?
            <div className="serv-container">
                <div className="tabs">
                    <div className="tabs-links">
                        <div className="tabs-link tabs-link-selected" id="preConstruction" onClick={this.selectTab} >Pre-Construction</div>
                        <div className="tabs-link" id="construction" onClick={this.selectTab}>Construction</div>
                        <div className="tabs-link" id="designBuild" onClick={this.selectTab}>Design Build</div>
                        <div className="tabs-link" id="sustainability" onClick={this.selectTab}>Sustainability</div>
                    </div>
                </div>
                <div className="tabs-items">
                        <div className="tabs-item tabs-item-selected">
                            <div className="tabs-item-title">Pre-Construction</div>
                            <div className="tabs-item-description">
                                <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
                                    one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state
                                    of the art customer service.<br /><br />Phosfluorescently engage worldwide methodologies with web-enabled
                                    technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking.
                                    Completely pursue scalable customer service through sustainable potentialities.</p>
                                <img src={preConstructionImage} alt="Pre-Construction" className="desktop" />
                                <img src={preConstructionMobile} alt="mobile Pre-Construction" className="mobile" />
                        </div>
                    </div>
                </div>
            </div>: 
            this.state.construction === true ?
            <div className="serv-container">
                <div className="tabs">
                    <div className="tabs-links">
                        <div className="tabs-link" id="preConstruction" onClick={this.selectTab}>Pre-Construction</div>
                        <div className="tabs-link tabs-link-selected" id="construction"  onClick={this.selectTab}>Construction</div>
                        <div className="tabs-link" id="designBuild" onClick={this.selectTab}>Design Build</div>
                        <div className="tabs-link" id="sustainability" onClick={this.selectTab}>Sustainability</div>
                    </div>
                </div>
                <div className="tabs-items">
                    <div className="tabs-item tabs-item-selected">
                        <div className="tabs-item-title">Construction</div>
                        <div className="tabs-item-description">
                            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
                                one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state
                                of the art customer service.<br /><br />Phosfluorescently engage worldwide methodologies with web-enabled
                                technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking.
                                Completely pursue scalable customer service through sustainable potentialities.</p>
                            <img src={constructionImage} alt="Construction" className="desktop" />
                            <img src={constructionMobile} alt="mobile Construction" className="mobile" />
                        </div>
                    </div>
                </div>
            </div> :
            this.state.designBuild === true ?
            <div className="serv-container">
                <div className="tabs">
                    <div className="tabs-links">
                        <div className="tabs-link" id="preConstruction" onClick={this.selectTab}>Pre-Construction</div>
                        <div className="tabs-link" id="construction"  onClick={this.selectTab}>Construction</div>
                        <div className="tabs-link tabs-link-selected" id="designBuild" onClick={this.selectTab}>Design Build</div>
                        <div className="tabs-link" id="sustainability" onClick={this.selectTab}>Sustainability</div>
                    </div>
                </div>
                <div className="tabs-items">
                    <div className="tabs-item tabs-item-selected">
                        <div className="tabs-item-title">Design Build</div>
                        <div className="tabs-item-description">
                            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
                                one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state
                                of the art customer service.<br /><br />Phosfluorescently engage worldwide methodologies with web-enabled
                                technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking.
                                Completely pursue scalable customer service through sustainable potentialities.</p>
                            <img src={designBuildImage} alt="Design Build" className="desktop" />
                            <img src={designBuildMobile} alt="mobile design build" className="mobile" />
                        </div>
                    </div>
                </div>
            </div> :
            this.state.sustainability === true ?
            <div className="serv-container">
                <div className="tabs">
                    <div className="tabs-links">
                        <div className="tabs-link" id="preConstruction" onClick={this.selectTab}>Pre-Construction</div>
                        <div className="tabs-link" id="construction"  onClick={this.selectTab}>Construction</div>
                        <div className="tabs-link" id="designBuild" onClick={this.selectTab}>Design Build</div>
                        <div className="tabs-link tabs-link-selected" id="sustainability" onClick={this.selectTab}>Sustainability</div>
                    </div>
                </div>
                <div className="tabs-items">
                    <div className="tabs-item tabs-item-selected">
                        <div className="tabs-item-title">Sustainability</div>
                        <div className="tabs-item-description">
                            <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
                                one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state
                                of the art customer service.<br /><br />Phosfluorescently engage worldwide methodologies with web-enabled
                                technology. Interactively coordinate proactive e-commerce via process-centric "outside the box" thinking.
                                Completely pursue scalable customer service through sustainable potentialities.</p>
                            <img src={sustainabilityImage} alt="Sustainability" className="desktop" />
                            <img src={sustainabilityMobile} alt="mobile sustainability" className="mobile" />
                        </div>
                    </div>
                </div>
            </div> : null
        )
      }
    }
