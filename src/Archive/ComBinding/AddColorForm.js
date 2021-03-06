import React, { Component } from 'react';

export default class AddColorForm extends Component{
	constructor(props){
		super(props)
		this.submit = this.submit.bind(this)
		console.log(this);
	}

	submit(e){
		const {_title, _color} = this.refs
		e.preventDefault();
		this.props.OnNewColor(_title.value, _color.value)
		_title.value = '';
		_color.value = '#000000';
		_title.focus();
	}

	render(){
		return(
			<form onSubmit={this.submit}>
				<input ref="_title"
						type="text"
						placeholder="color title..." required/>

				<input ref="_color"
						type="color" required/>
				<button>ADD</button>
			</form>
		)
	}
}