import React, { Component } from 'react'

class Footer extends Component {

	constructor(props) {
		super(props)
		this.getCurrentYear = this.getCurrentYear.bind(this)
	}

	getCurrentYear = () => 
		(new Date()).getFullYear()


	render() {
		return (
			<div className = "footer">
				<ul className = "footer-list">
					<li>© { this.getCurrentYear() }</li>
					<li>All Rights Reserved</li>
				</ul>
			</div>
		)
	}
}

export default Footer