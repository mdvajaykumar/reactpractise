import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [list] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <div class="text-center">
      <h1 className="bg-secondary sticky-top" style={{ height: "60px" }}>
        Mini facebook
      </h1>
      {list.map((index, item) => (
        <div key={index}>
          <img
            src={"https://picsum.photos/300" + index}
            alt=""
            className="bg-cover m-2 rounded"
            style={{ height: "200px", width: "100vw" }}
          />
        </div>
      ))}
    </div>
  );
}
export default App;
