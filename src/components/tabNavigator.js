import React from 'react';
import Img from 'gatsby-image';
import './layout.css'

class TabNavigator extends React.Component {
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
                                <Img alt="Pre-Construction" fluid={this.props.props.data.preConstructionImage.childImageSharp.fluid} className="desktop"/>
                                <Img alt="mobile Pre-Construction" fluid={this.props.props.data.preConstructionMobile.childImageSharp.fluid} className="mobile" />
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
                            <Img alt="Construction" fluid={this.props.props.data.constructionImage.childImageSharp.fluid} className="desktop"/>
                            <Img alt="mobile Construction" fluid={this.props.props.data.constructionMobile.childImageSharp.fluid} className="mobile" />
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
                            <Img alt="Design Build" fluid={this.props.props.data.designBuildImage.childImageSharp.fluid} className="desktop"/>
                            <Img alt="mobile design build" fluid={this.props.props.data.designBuildMobile.childImageSharp.fluid} className="mobile" />
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
                            <Img alt="Sustainability" fluid={this.props.props.data.sustainabilityImage.childImageSharp.fluid} className="desktop"/>
                            <Img alt="mobile sustainability" fluid={this.props.props.data.sustainabilityMobile.childImageSharp.fluid} className="mobile" />
                        </div>
                    </div>
                </div>
            </div> : null
        )
      }
    }

export default TabNavigator; 