import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header>
        <img className="logo" src="" alt="" />
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Cities</a></li>
            <li><button href="">Login</button></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h1>Título</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='bg-mytin text-mytin w-28 h-10 rounded-lg' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        </section>
        <img className="fondo" src="" alt="" />
      </main>
      <footer></footer>
      </>
  )
}

export default App
