import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './componets/Navbar'

import News from './componets/News'

const App = () => {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<News key="general" category="general" title='TV9' />}
            ></Route>
            <Route
              path="/Home"
              element={<News key="general" category="general" title='TV9-general'/>}
            />
            <Route path="/business" element={<News category="business" title='TV9-business' />} />
            <Route
              path="/entertainment"
              element={<News key="entertainment" category="entertainment" title='TV9-entertainment' />}
            />

            <Route
              exact
              path="/general"
              element={<News key="general1" category="general" title='TV9-general' />}
            />
            <Route
              force
              path="/health"
              element={<News key="health" category="health" title='TV9-health' />}
            />

            <Route
              path="/science"
              element={<News key="science" category="science" title='TV9-science' />}
            />

            <Route
              path="/sports"
              element={<News key="sports" category="sports" title='TV9-sports' />}
            />

            <Route
              path="/technology"
              element={<News key="technology" category="technology" title='TV9-technology' />}
            />
          </Routes>
        </Router>
    </>
  )
}

export default App
