import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import { ChakraProvider } from '@chakra-ui/react'
import News from './components/News';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
       <NavBar marginTop={'02px'} />
      
      </header>
      <div>
      <News />
      </div>
    </div>
    </ChakraProvider>
  );
}

export default App;
