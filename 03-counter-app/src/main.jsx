import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { HelloWorldApp} from './HelloWorldApp';
import {CounterApp} from './CounterApp';
import './styles.css'
// ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><HelloWorldApp/></React.StrictMode>);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <FirstApp title ='Hola, soy vegueta'  />
    {/* <CounterApp value={10}/> */}
    </React.StrictMode>
    );