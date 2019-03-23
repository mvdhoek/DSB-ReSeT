import React, { Component } from 'react';

import SearchFilters from './SearchFilters';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		};
	}

	toggleVisibility = () => {
		const visible = !this.state.visible;
		this.setState({
			visible,
		});
	}

	render() {
		return (
			<nav className={`navbar ${this.state.visible ? 'active' : ''}`}>
				
				<div className="title-icon"><a className="title-icon" href="./"><i className="fa fa-search"></i></a> <a className="title-icon" href="./"><i className="fa fa-plane"></i></a></div>
				<br></br>

				<div className="title">Safety <font color="4a97b5">Re</font>port <font color="4a97b5">Se</font>arch <font color="4a97b5">T</font>ool</div>
				<br></br>

				<div className="title"><font color="4a97b5" size="8">ReSeT</font></div>

				<br></br>

                <div className="btn toggle-btn" onClick={this.toggleVisibility}>Toggle Filters</div>
				<SearchFilters {...this.props} visible={this.state.visible} />

				<div className="btm-text"><a className="btm-links" href="https://www.onderzoeksraad.nl" target="_blank" rel="noopener noreferrer"><img className="logo" src={require('../images/logo/DSB_logo.svg')} alt="logo" width="20px" height="20px" /></a></div>
				
				<br></br>
				<div className="btm-text">© Copyright 2019 Onderzoeksraad voor Veiligheid. Some rights reserved. <i className="fab fa-creative-commons"></i><i className="fab fa-creative-commons-by"></i><i className="fab fa-creative-commons-nc-eu"></i><i className="fab fa-creative-commons-sa"></i></div>
				<br></br>
				<div className="btm-links"><a className="btm-links" href="https://twitter.com/onderzoeksraad" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></div>
				<div className="btm-links"><a className="btm-links" href="https://www.youtube.com/channel/UC8YTCQ5-kR3aqaUwyUk1Sig" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></div>
				<div className="btm-links"><a className="btm-links" href="https://www.linkedin.com/company/onderzoeksraad-voor-veiligheid/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></div>
			</nav>
		);
	}
}

export default Header;