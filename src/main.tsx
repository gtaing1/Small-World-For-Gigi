import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from './App'; 
import { worker } from './mock-apis/browser';


worker.start();
worker.printHandlers(); 

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>
  )






