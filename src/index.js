import React from 'react';
import ReactDOM from 'react-dom';
import App from './Colors-Store-Action/App';
import storeFactory from "./Colors-Store-Action/Store_and_Reducers/Middleware"
//import App from './Todo-Reduces-MiddleWare/app';


//RESUME ON COLORS-STATE-ACTION REDUCERS TRYING TO MAKE A COLOR HIGHLIGHT METHOD
//THEN ON PAGE 219
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory();
window.store = store

ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
//ReactDOM.render(<App/>, document.getElementById('root'));


//registerServiceWorker();
