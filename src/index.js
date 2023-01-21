import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// createContext()
// provider  
// receiver

ReactDOM.render(
    <>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </>,
    document.getElementById('root')
)