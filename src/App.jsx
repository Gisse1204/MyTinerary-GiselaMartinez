import './App.css';
import MainContainer from './components/MainContainer';
import Nav from './components/Nav';
import Home from './pages/Home';
Home
MainContainer

function App() {

  return (
    <div className='w-full flex flex-col'>  
      <Nav/>
      <MainContainer/>
      <main>

      </main>

      </div>
  )
}

export default App