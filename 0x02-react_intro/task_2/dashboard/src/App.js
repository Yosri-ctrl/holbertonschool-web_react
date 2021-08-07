import logo from './holberton_logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js'

function App() {
  return (
    <div>
      <div className="App-header">
        <img className="h_img" src={logo} alt="Holberton Logo"/>
        <h1 className="h_h1">School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label>Email</label>
        <input type="email"></input>
        <label>Password</label>
        <input type="password"></input>
        <button>Ok</button>
      </div>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
