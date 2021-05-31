import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <FifthComponent />
    </div>
  );
}

const FifthComponent = () => {
  const [counter] = useState(100);
  const [username] = useState("mumbai");

  return (
    <div>
      <h1>COUNTER: {counter}</h1>
      <h1> USERNAME : {username}</h1>
    </div>
  );
};

const FourthComponent = () => {
  const [counter, setCounter] = useState(100);

  const updateCounter = () => {
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Updating the values</h1>
      <input type="button" value="updateCounter" onClick={updateCounter} />
      <h1>React Aware : {counter}</h1>
    </div>
  );
};

const ThirdComponent = () => {
  const localcounter = 100;
  const [counter] = useState(100);

  return (
    <div>
      <h1>Third Compnent</h1>
      <div>counter with React {counter}</div>
      <div> loacl counter without react{localcounter}</div>
    </div>
  );
};

const SecondComponent = () => {
  return (
    <div>
      <div>
        <h1 className="king">React Heading </h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          error aperiam temporibus sunt alias iusto ex facere blanditiis non
          eligendi impedit a et rerum, cumque beatae harum fuga ut! Vero.
        </div>

        <h4 className="heading"> Heading 6</h4>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
          assumenda sequi, excepturi molestiae veniam, error officiis earum
          repellat iste iure rerum sed sit placeat facere ex dignissimos!
          Temporibus, sit facere.
        </div>
      </div>
    </div>
  );
};

export default App;
