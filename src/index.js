import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import GlobalStyles from './globalStyles';
import { firebase } from './lib/firebase.prod';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase }}>
      <GlobalStyles />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
