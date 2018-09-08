import React, { Component } from 'react';


class Change extends Component {
	constructor (props) {
		super(props)
		this.state = {username: 'John'};
	}

	NewUser = () => {
		this.setState({username: 'Roger'});
	}

	
	render() {
		return (

			<div>
			<h3>{this.state.username}</h3>
			<button onClick={this.NewUser}>Change</button>
			</div>

		);
	}
}
export default Change;