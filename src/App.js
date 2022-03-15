import React from 'react';
import './style.css';
import Introduction from './Components/Introduction';
import Jsxextension from './Components/Jsxextension';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Introduction</Link>
            </li>
            <li>
              <Link to="/jsxextension">Jsx Elements</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Introduction />}></Route>
          <Route exact path="/jsxextension" element={<Jsxextension />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
