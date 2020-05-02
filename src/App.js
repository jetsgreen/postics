import React from 'react';
import { BrowserRouter,Switch, Route} from 'react-router-dom'
import Container from './Container';
import Home from './components/pages/Home';
import About from "./components/pages/About";
import Contact from './components/pages/Contact'
import Services from './components/pages/Services';
import NoMatch from './components/pages/NoMatches';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Container/>
     <Switch>
       <Route exact path="/postics" component={Home}/>
       <Route  path="/about" component={About}/>
       <Route  path="/contact" component={Contact}/>
       <Route  path="/services" component={Services}/>
       <Route  component={NoMatch}/>
     </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
