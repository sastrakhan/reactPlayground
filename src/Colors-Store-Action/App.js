import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'
import {NewColor} from './Container'
//import { sortFunction } from '../lib/array-helpers'


const App = () => (
	<div className="app">
		<NewColor />
	</div>
);


//class App extends Component{
//    getChildContext(){
//        return{
//            store: this.props.store
//        }
//    }

//    componentWillMount(){
//        this.unsubscribe = this.props.store.subscribe(
//            () => this.forceUpdate()  //Forces UI to rerender on store change
//        )
//    }

//    componentWillUnmount(){
//        this.unsubscribe(); //Stop listening to store because it's not the one making change but UI does
//    }

//    render(){
//        const{colors} = this.props.store.getState()
//        return(
//            <div className="app">
//                <NewColor />
//            </div>
//        )
//    }
//}

//App.childContextTypes = {
//    store: PropTypes.object.isRequired
//}

export default App

