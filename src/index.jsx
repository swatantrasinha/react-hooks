import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './components/0_demo-components/layout/Layout.jsx';
import {BrowserRouter} from 'react-router-dom';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Layout />
    </BrowserRouter>
</React.StrictMode>
)
