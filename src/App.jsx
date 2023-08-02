import './App.css';

function App() {
  return (
    <>
      <header>
        <img className="logo" src="https://clipart-library.com/images_k/travel-clipart-transparent/travel-clipart-transparent-16.png" alt="" />
        <h1>My Tinerary</h1>
        <nav> 
          <ul className="barra">
            <li><a href="">Home</a></li>
            <li><a href="">Cities</a></li>
            <li><button className='bg-mytin text-mytin w-28 h-10 rounded-lg'>Login</button></li>
          </ul>
        </nav>
      </header>
      <main className="d-flex flex-wrap-reverse justify-content-center">
        <section className="main-content">
          <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button className='bg-mytin text-mytin w-28 h-10 rounded-lg cta-button' onClick={() => window.location.href = "/cities"}>
            Explore Cities
          </button>
        </section>
        <img className="fondo" src="http://www.portiktravel.com/wp-content/uploads/2013/02/services.png" alt="" />
      </main>
      <footer></footer>
    </>
  );
}

export default App;