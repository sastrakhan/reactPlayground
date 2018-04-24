import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import {NewColor, Colors} from './Container'
import Better from './ui/Better'
import { BrowserRouter as Router , Switch, Link, Route} from 'react-router-dom'

const App = () => (
	<Router>
		<div className="app">
		 	<Better /> 
			<NewColor />
			<Colors/>
		</div>
	</Router>
);

export default App

