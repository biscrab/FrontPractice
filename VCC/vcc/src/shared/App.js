import HomePage from '../pages/Home';
import '../components/Home.css'
import {Switch, Route} from 'react-router-dom';
import * as P from '../pages' 

function App() {
  return (
    <div>
      <HomePage>
        <Route exact path="/" component={P.Home}/>
        <Route path="/Profile/:name" component={P.Profile}/>
      </HomePage>
    </div>
  );
}

export default App;
