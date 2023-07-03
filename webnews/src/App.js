import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const [progress, setProgress] = useState(0);
  let apiKey = process.env.REACT_API_KEY
  console.log(apiKey);

  return (
    <Router>
      <ChakraProvider>
        <div className="App">
          <header className="App-header">
            <NavBar marginTop={'2px'} />
            <LoadingBar
              color='#f11946'
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
          </header>

          <Routes>
            <Route path="/business" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_KEY} key='1' category='business' />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_KEY} key='2' category='science' />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_KEY} key='3' category='entertainment' />} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_KEY} key='4' category='general' />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_KEY} key='5' category='health' />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_KEY} key='6' category='technology' />} />
            <Route path="/" element={<News setProgress={setProgress} apiKey={process.env.REACT_APP_KEY} key='7' category='general' />} />
          </Routes>

        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
