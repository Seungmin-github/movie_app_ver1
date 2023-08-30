import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';
function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home}/> 
      {/* exact={true}는 정확한 /만 들어가야 나오게 하는 것 저걸 빼면 저거만 나오기때문에 표시를 해줘야함 */}
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
    ); 
}

export default App;
