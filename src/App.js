import { useEffect, useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import image from './images/Dio.png';


function App() {
  console.log(<Welcome />);
  const [count, setCount] = useState(0);
  const [seconds, setTime] = useState(0);
  const [active, setActive] = useState(false);

  function addOne() {
    setCount(count + 1);
  }
  function retireOne() {
    setCount(count - 1);
  }



  useEffect(() => {
    const interval = setInterval(() => {
      console.log('a second has passed');
      setTime(seconds + 1);
    }, 1000);
    if (seconds === 10) {
      clearInterval(interval);
      setActive(true);
    }
    return () => clearInterval(interval);
  });

  function sayAnything() {
    if (seconds === 10) {
      return <h1 style={{ fontSize: 50 }} class="center-warudo">ZA WARUDO !!!</h1>;
    }

  }

  function dio() {
    if (seconds === 10) {
      return <img src={image} alt="" class="dio"></img>;
    }
  }



  return (
    <div className="tkt" style={{ backgroundColor: active ? 'black' : 'white', color: active ? 'white' : 'black' }}>
      <section>
        <Welcome firstname='Yanis' lastname='Ourir' />
        <p>Vous avez cliqué : {count} fois !</p>
        <button onClick={addOne}>Ajouter 1</button>
        <button onClick={retireOne}>Retirer 1</button>
      </section>

      <section>
        <p>{seconds}s s'est écoulé</p>
        {sayAnything()}
        <div class='center-dio'>
          {dio()}
        </div>

      </section>
    </div>
  );
}

export default App;
