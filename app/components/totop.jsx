require('./totop.css');
import React from 'react';

let ToTop = React.createClass({
	render: function() {
		return (
			<div className="bottom-to-top">
				<img src=" ./images/scroll-to-top-icon-new.png"/>
			</div>
		);
	}
});
module.exports = ToTop;
