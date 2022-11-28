import React from 'react';
import { hydrate, render } from 'react-dom';
import { createRoot, hydrateRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
// if (rootElement.hasChildNodes()) {
  // hydrateRoot(rootElement, <App />);
// } else {
  // let root = createRoot(rootElement);
  // root.render(<App />);
// }

// package git example
// if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
// } else {
//   let root = createRoot(rootElement);
//   root.render(<App />);
// }



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
