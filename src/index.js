import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import Planes from './Planes';
//import MyForm from './Chat';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Planes />, document.getElementById('information'));
//ReactDOM.render(<MyForm/>, document.getElementById('chat'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
