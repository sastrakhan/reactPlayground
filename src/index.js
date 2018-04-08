import React from 'react';
import ReactDOM from 'react-dom';
import App from './Colors-Store-Action/App';
import storeFactory from "./Colors-Store-Action/Store_and_Reducers/Middleware"
import { Provider } from 'react-redux'
//import App from './Todo-Reduces-MiddleWare/app';


//THEN ON PAGE 229
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
