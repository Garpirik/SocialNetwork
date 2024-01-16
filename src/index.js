import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { rerenderEntireTree } from './render';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux_store';

import { Provider } from 'react-redux';

// addPost("Samurai Pandas")
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App state={store.getState()} dispatch={store.dispatch.bind(store)} store={store} />
    {/* <Greeting/> */}
    </Provider>
  </React.StrictMode>
);
}




rerenderEntireTree();

// store.subscribe( () => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// })
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
