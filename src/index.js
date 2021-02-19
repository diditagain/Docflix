import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import i18next from "i18next";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={[<div>Loading...</div>]}>
    <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);


