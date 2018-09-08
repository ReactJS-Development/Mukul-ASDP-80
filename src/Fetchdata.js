import React, { Component } from 'react';


class Fetchdata extends Component {
	constructor (props) {
		super(props)
		this.state = {Name: 'Bucky', Age: 23, EmpID: 1012, Department: 'Testing', Profile: 'Tester' };
	}


	render() {
		return (

			<div>
			<h3>{this.state.Name}</h3>
			<h3>{this.state.Age}</h3>
			<h3>{this.state.EmpID}</h3>
			<h3>{this.state.Department}</h3>
			<h3>{this.state.Tester}</h3>
			</div>

		);
	}
}
export default Fetchdata;