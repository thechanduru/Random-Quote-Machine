import './App.css';
import Quotegenerator from './components/Quotegenerator';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  const [color, setColor] = useState("");

  return (
    <div>
      <Header/>
      <div className="App" style={{backgroundColor:color}}>
        <Quotegenerator setColor={setColor}/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
