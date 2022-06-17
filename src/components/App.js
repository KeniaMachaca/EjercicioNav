import { Navegation } from '../routes/Navegation';
import '../styles/App.css';
import { About } from './About';
import { Dashboard } from './Dashboard';
import { Header } from './Header';
import { Home } from './Home';

function App() {
  return (
    <div className="App">
      <Navegation/>
    </div>
  );
}

export default App;
