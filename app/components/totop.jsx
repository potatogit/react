require('./totop.css');
import React from 'react';
import topIcon from '../images/scroll-to-top-icon-new.png';

let ToTop = React.createClass({
	getInitialState: function() {
		return {
			show: false,
		};
	},
	componentDidMount: function () {
		// Add all listeners which can start scroll
		window.addEventListener('scroll', this.handleScroll);
	},
	handleScroll: function() {
		if (window.pageYOffset > this.props.showUnder) {
			if (!this.state.show) {
				this.setState({ show: true });
			}
		} else {
			if (this.state.show) {
				this.setState({ show: false });
			}
		}
	},
	handleClick: function() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	},
	render: function() {
		return (
			<div className="bottom-to-top" onClick={this.handleClick} style={{display: this.state.show ? 'block' : 'none' }}>
				<img src={topIcon} alt="" />
			</div>
		);
	}
});
module.exports = ToTop;
