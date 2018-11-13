import React from 'react'

export default class TabNavigator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preConstruction: true,
            construction: false,
            designBuild: false,
            sustainability: false
        };
      }

      selectTab = (e) => {
        e.preventDefault();
        console.log(e.target);
        this.setState({ [e.target]: true });
      }

      render() {
        return (
            this.state.preConstruction === true ?
            <div className="serv-container">
                <div className="tabs">
                    <div className="tabs-links">
                        <div className="tabs-link tabs-link-selected" name="preConstruction" onClick={this.selectTab} >Pre-Construction</div>
                        <div className="tabs-link" name="construction" onClick={this.selectTab}>Construction</div>
                        <div className="tabs-link" name="designBuild" onClick={this.selectTab}>Design Build</div>
                        <div className="tabs-link" name="sustainability" onClick={this.selectTab}>Sustainability</div>
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
                                <img src="./img/services/services-tab-pre-construction-img.png" alt="Pre-Construction" className="desktop" />
                                <img src="./img/services/services-tab-mobile-pre-construction-img.png" alt="mobile Pre-Construction" className="mobile" />
                        </div>
                    </div>
                </div>
            </div>: 
            this.state.construction === true ?
            <div className="serv-container">
                <div className="tabs">
                    <div className="tabs-links">
                        <div className="tabs-link" name="preConstruction" onClick={this.selectTab}>Pre-Construction</div>
                        <div className="tabs-link tabs-link-selected" name="construction"  onClick={this.selectTab}>Construction</div>
                        <div className="tabs-link" name="designBuild" onClick={this.selectTab}>Design Build</div>
                        <div className="tabs-link" name="sustainability" onClick={this.selectTab}>Sustainability</div>
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
                            <img src="./img/services/services-tab-construction-img.png" alt="Construction" className="desktop" />
                            <img src="./img/services/services-tab-mobile-construction-img.png" alt="mobile Construction" className="mobile" />
                        </div>
                    </div>
                </div>
            </div> :
            this.state.designBuild === true ?
            <div className="serv-container">
                <div className="tabs">
                    <div className="tabs-links">
                        <div className="tabs-link" name="preConstruction" onClick={this.selectTab}>Pre-Construction</div>
                        <div className="tabs-link" name="construction"  onClick={this.selectTab}>Construction</div>
                        <div className="tabs-link tabs-link-selected" name="designBuild" onClick={this.selectTab}>Design Build</div>
                        <div className="tabs-link" name="sustainability" onClick={this.selectTab}>Sustainability</div>
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
                            <img src="./img/services/services-tab-design-build-img.png" alt="Design Build" className="desktop" />
                            <img src="./img/services/services-tab-mobile-design-build-img.png" alt="mobile design build" className="mobile" />
                        </div>
                    </div>
                </div>
            </div> :
            this.state.sustainability === true ?
            <div className="serv-container">
                <div className="tabs">
                    <div className="tabs-links">
                        <div className="tabs-link" name="preConstruction" onClick={this.selectTab}>Pre-Construction</div>
                        <div className="tabs-link" name="construction"  onClick={this.selectTab}>Construction</div>
                        <div className="tabs-link" name="designBuild" onClick={this.selectTab}>Design Build</div>
                        <div className="tabs-link tabs-link-selected" name="sustainability" onClick={this.selectTab}>Sustainability</div>
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
                            <img src="./img/services/services-tab-sustainability-img.png" alt="Sustainability" className="desktop" />
                            <img src="./img/services/services-tab-mobile-sustainability-img.png" alt="mobile sustainability" className="mobile" />
                        </div>
                    </div>
                </div>
            </div> : null
        )
      }
    }
