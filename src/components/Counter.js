import React, { Component } from 'react';
import { action, observable } from 'mobx';
import { Box } from '../models/Box';

class Counter extends Component {
	mainStore = new MainStore();
	render () {
		const mainStore = this.mainStore;
		console.log(mainStore);
		return (
			<div>
				<p>test</p>
				<button onClick={this.plusClick}>+</button>
				<button onClick={this.minusClick}>-</button>
			</div>
		);
	}
}

export default Counter;
