import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import News from './components/News';
import {
  BrowserRouter as Router,

  Route,
  Link
} from "react-router-dom";
import { Switch } from 'react-router-dom';



function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <header className="App-header">
            <NavBar marginTop={'02px'} />
          </header>
          {/* <div className='news'> */}

          <Switch>
            <Route path="/business">
              <News category='business' />
            </Route>
            <Route path="/entertainment">
              <News category='entertainment' />
            </Route>
            <Route path="/general">
              <News category='general' />
            </Route>
            <Route path="/health">
              <News category='health' />
            </Route>
            <Route path="/science">
              <News category='science' />
            </Route>
            <Route path="/technology">
              <News category='technology' />
            </Route>


          </Switch>
          {/* </div> */}
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
