import React, { Component}  from 'react';
import { Route, Link } from 'react-router-dom'
import About from './About'
import App from '.././App'


const Better = () => {
    return (
        <div>
          <h2>The Better Page</h2>
            <Route path='/about' component={About}/>
            <li>
 				<Link to="/about">About</Link>
 		    </li>
        </div>
    )
};
   
//   {/* <Route path='/' component={App}/>
//             <Route path='/about' component={About}/> */}
export default Better
