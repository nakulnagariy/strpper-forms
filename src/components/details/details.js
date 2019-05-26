import React, { Component } from 'react';
import Radium from 'radium';
import { DetailsUtility } from './detailsUtility';
// import { inherits } from "util";

class Details extends Component {
	constructor (props) {
		super(props);
		this.state = {
			name: 'Nakul',
			age: 23
		};
	}

	changed = (e) => {
		const name = e.target.value;
		const age = this.state.age;
		this.changedNameAge(name, age);
	};

	changedNameAge = (name, age) => {
		this.setState((prevState) => {
			return {
				name: name,
				age: age
			};
		});
	};

	addAge = () => {
		this.setState((prevState) => {
			return {
				age: prevState.age + 1
			};
		});
	};

	subAge = () => {
		this.setState((prevState) => {
			return {
				age: prevState.age - 1
			};
		});
	};

	render() {
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '15px',
			cursor: 'pointer',
			boxShadow: '2px 2px 5px lightgreen',
			':hover': {
				backgroundColor: 'white',
				color: 'green'
			}
		};
		return (
			<React.Fragment>
				<div className="container my-4">
					<h1>Details</h1>
					<p>{this.state.name}</p>
					<button className="btn btn-primary" onClick={this.addAge}>
						Age +
					</button>
					<span className="m-x-4"> {this.state.age} </span>
					<button className="btn btn-primary" onClick={this.subAge}>
						Age -
					</button>
					<DetailsUtility change={this.changed} value={this.state.name}>
						ye props ke childrens hai..
					</DetailsUtility>
					{/*<button onClick={this.changedNameAge.bind(this, 'Naman', 26)}>change the content with bind</button> */}
					<button style={style} onClick={() => this.changedNameAge('kamlesh', 29)}>
						change the content with arrow ()=> function
					</button>
				</div>
			</React.Fragment>
		);
	}
}

export default Radium(Details);
