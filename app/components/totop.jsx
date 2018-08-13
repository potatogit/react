require('./totop.css');
import React from 'react';
import topIcon from '../images/scroll-to-top-icon-new.png';

let ToTop = React.createClass({
	render: function() {
		return (
			<div className="bottom-to-top">
				<img src={topIcon} alt="" />
			</div>
		);
	}
});
module.exports = ToTop;
