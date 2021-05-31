import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const updateTextInput = (e) => setTextInput(e.target.value);

  const [list, setList] = useState([]);
  const postTweet = () => {
    setList([textInput, ...list]);
    setTextInput("");
  };

  const deleteTweet = (item, index) => {
    list.splice(index, 1);

    setList([...list]);
  };

  return (
    <div>
      <h1 className="bg-dark text-light p-3 sticky-top text-center">
        Mini Facebook
      </h1>

      <div className=" row">
        <input
          type="text"
          value={textInput}
          onChange={(e) => updateTextInput(e)}
          className="form-control mb-1"
          placeholder="post your  tweet"
        />
        <input
          type="button"
          className="btn btn-dark text-primary"
          onClick={() => postTweet()}
          value="Tweet"
        />
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className="alert alert-secondary d-flex justify-content-between align-items-center"
        >
          {item}
          <button
            className="btn btn-outline-dark"
            onClick={() => deleteTweet(item, index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
export default App;
