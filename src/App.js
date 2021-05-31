import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <DynamicCompnent />
    </div>
  );
}

const DynamicCompnent = () => {
  const [list, setList] = useState([]);

  const [tweetInput, setTweetInput] = useState("");

  const readAndUpdateTweet = (e) => {
    setTweetInput(e.target.value);
  };
  const postTheTweet = () => {
    setList([tweetInput, ...list]);
    setTweetInput("");
  };

  return (
    <div>
      <h2>Tweets</h2>
      <div>
        {/** STEP 3 value and onChange */}
        <input
          type="text"
          value={tweetInput}
          onChange={(e) => readAndUpdateTweet(e)}
          placeholder="your thought..."
        />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>

      {list.map((item, index) => (
        <div key={index} className="king">
          {item}
        </div>
      ))}
    </div>
  );
};

const MyComponent = () => {
  const [list, setList] = useState(["Delhi", "Kolkata"]);

  const postTheTweet = () => {
    setList(["MUMBAI", ...list]);
  };

  return (
    <div>
      <h1>Mini Twitter</h1>
      <div>
        <input type="text" value="" placeholder="your thought..." />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>

      <h2>Tweets</h2>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

const ListExampleComponent = () => {
  const [list, setList] = useState([1, Math.random()]);

  const updateList = () => {
    const newList = [...list];

    newList.unshift(Math.random());

    setList(newList);
  };

  return (
    <div>
      <h1>List Example Components</h1>
      <div>
        <input
          type="button"
          value="update a element "
          onClick={() => updateList()}
        />
      </div>

      {list.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
};

const ListExampleComponent2 = () => {
  const [list, setList] = useState([1, 2]);

  const AddElement = () => {
    setList([Math.random(), ...list]);
  };

  return (
    <div>
      <h1>List Example Components 2 </h1>
      <div>
        <input
          type="button"
          value="add a element"
          onClick={(e) => AddElement()}
        />
      </div>

      {list.map((item, index) => (
        <h3 key={index} className="king">
          {item}
        </h3>
      ))}
    </div>
  );
};

const ListExampleComponent3 = () => {
  const [list, setList] = useState([1, Math.random()]);

  const updateList = () => {
    const newList = [...list];

    newList.unshift(Math.random());

    setList(newList);
  };

  return (
    <div>
      <h1>List Example Components</h1>
      <div>
        <input
          type="button"
          value="update a element "
          onClick={() => updateList()}
        />
      </div>

      {list.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
};

const SixthComponent = () => {
  const [counter] = useState(100);
  const [username] = useState("mumbai");
  const [list] = useState(["delhi", "Mumbai", "Gujurat", "maharastra", "pune"]);

  return (
    <div>
      <h1>COUNTER: {counter}</h1>
      <h1> USERNAME : {username}</h1>
      <h1>{list}</h1>

      {list.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
};

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
