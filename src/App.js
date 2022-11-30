import logo from './logo.svg';
import './App.css';
import MyNavbar from './screens/navbar/navbar';
import Home from './screens/home/home';
import About from './screens/about/about';
function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
