import React from 'react';
import ReactDOM from 'react-dom';
import App from './Colors-Store-Action/App';
import storeFactory from "./Colors-Store-Action/Store_and_Reducers/Middleware"
import { Provider } from 'react-redux'
//import App from './Todo-Reduces-MiddleWare/app';

//Figure out this buttholery with routing

import registerServiceWorker from './registerServiceWorker';

const store = storeFactory();
window.store = store
window.React = React

ReactDOM.render(<Provider store={store}>
					<App />
				</Provider>,
                document.getElementById('root'));

                
//ReactDOM.render(<App/>, document.getElementById('root'));
//registerServiceWorker();

// const BasicExample = () => (
// 	<Router>
// 	  <div>
// 		<ul>
// 		  <li>
// 			<Link to="/">Home</Link>
// 		  </li>
// 		  <li>
// 			<Link to="/about">About</Link>
// 		  </li>
// 		</ul>
  
// 		<hr />
  
// 		<Route exact path="/" component={Home} />
// 		<Route path="/about" component={About} />
// 	  </div>
// 	</Router>
//   );
  
//   const Home = () => (
// 	<div>
// 	  <h2>Home</h2>
// 	</div>
//   );
  
//   const About = () => (
// 	<div>
// 	  <h2>About</h2>
// 	</div>
//   );

//   ReactDOM.render(
// 	<BasicExample />
// ,
// document.getElementById('root'));