import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const [inputText, setInputText] = useState("");

  const UpdateValue = (e) => {
    setInputText(e.target.value);
  };

  const AddPost = () => {
    setList([inputText, ...list]);
    setInputText("");
  };

  return (
    <div>
      <div
        className="bg-primary text-center mb-2 sticky-top"
        style={{ height: "30px" }}
      >
        Mini Facebook
      </div>
      <input
        type="text"
        placeholder="share your things"
        onChange={(e) => UpdateValue(e)}
      />
      <input
        type="button"
        value="post"
        className="m-2"
        onClick={() => AddPost()}
      />
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
export default App;
