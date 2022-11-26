import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from 'react'
import './App.css';
import Navbar from './componets/Navbar'
import LoadingBar from 'react-top-loading-bar'
import News from './componets/News'

const App = () => {
  const [progress, setProgress] = useState(10)
  let apiKey = process.env.REACT_APP_API_KEY 
 
  return (
    <>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<News API_KEY = {apiKey} setProgress={setProgress} key="general" category="general" title='TV9' />}
          ></Route>
          <Route
            path="/Home"
            element={<News API_KEY = {apiKey} setProgress={setProgress} key="general" category="general" title='TV9-general' />}
          />
          <Route path="/business" element={<News API_KEY = {apiKey} setProgress={setProgress} category="business" title='TV9-business' />} />
          <Route
            path="/entertainment"
            element={<News API_KEY = {apiKey} setProgress={setProgress} key="entertainment" category="entertainment" title='TV9-entertainment' />}
          />

          <Route
            exact
            path="/general"
            element={<News API_KEY = {apiKey} setProgress={setProgress} key="general1" category="general" title='TV9-general' />}
          />
          <Route
            force
            path="/health"
            element={<News API_KEY = {apiKey} setProgress={setProgress} key="health" category="health" title='TV9-health' />}
          />

          <Route
            path="/science"
            element={<News API_KEY = {apiKey} setProgress={setProgress} key="science" category="science" title='TV9-science' />}
          />

          <Route
            path="/sports"
            element={<News API_KEY = {apiKey} setProgress={setProgress} key="sports" category="sports" title='TV9-sports' />}
          />

          <Route
            path="/technology"
            element={<News API_KEY = {apiKey} setProgress={setProgress} key="technology" category="technology" title='TV9-technology' />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
