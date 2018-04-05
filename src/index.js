import React from 'react';
import ReactDOM from 'react-dom';
import App from './Colors-Store-Action/App';
import storeFactory from "./Colors-Store-Action/Store_and_Reducers/Middleware"
//import App from './Todo-Reduces-MiddleWare/app';


//THEN ON PAGE 222
//You just started making a UI and putting presentation comps there
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory();
window.store = store

ReactDOM.render(<App store = {store}/>, document.getElementById('root'));
//ReactDOM.render(<App/>, document.getElementById('root'));


//registerServiceWorker();
