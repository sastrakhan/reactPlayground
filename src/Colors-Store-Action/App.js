import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import {NewColor, Colors} from './Container'
//import { sortFunction } from '../lib/array-helpers'

const App = () => (
	<div className="app">
		<NewColor />
		<Colors/>
	</div>
);

export default App

