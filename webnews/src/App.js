import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import News from './components/News';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
    <ChakraProvider>
      <div className="App">
      
          <header className="App-header">
            <NavBar marginTop={'2px'} />
          </header>
          {/* <div className='news'> */}

          <Routes>
            <Route path="/business" element={ <News key='1' category='business' />}/>
            <Route path="/science" element={ <News key='2' category='science' />}/>
            <Route path="/entertainment" element={ <News key='3' category='entertainment' />}/>
            <Route path="/general" element={ <News key='4' category='general' />}/>
            <Route path="/health" element={ <News key='5' category='health' />}/>
            <Route path="/technology" element={ <News key='6' category='technology' />}/>
            <Route path="/" element={ <News key='7' category='general' />}/>
          </Routes>
          {/* </div> */}
        
      </div>
    </ChakraProvider>
    </Router>
  );
}

export default App;
