import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
const apiKey= process.env.REACT_APP_API_KEY ;

function App() {
  const [progress, setProgress] = useState(0);
  

  return (
    <Router>
      <ChakraProvider>
        <div className="App">
          <header className="App-header" style={{"position":"fixed","zIndex":"1","width":"100%"}}>
            <NavBar marginTop={'2px'} />
            <LoadingBar
              color='#f11946'
              progress={progress}
              onLoaderFinished={() => setProgress(0)}
            />
          </header>
          <body className='body'>
          {console.log("In app js : "+apiKey)}
          <Routes>
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key='1' category='business' />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key='2' category='science' />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key='3' category='entertainment' />} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key='4' category='general' />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key='5' category='health' />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key='6' category='technology' />} />
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key='7' category='general' />} />
          </Routes>

          </body>
        </div>
      </ChakraProvider>
    </Router>
  );
}

export default App;
