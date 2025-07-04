import { useState } from "react";
import "./App.css";

function App() {
  let name = "hello";
  const [value, setvalue] = useState(0);

  const handleChange = (e) => {
    setvalue(e.target.value);
  };

  return (
    <>
      <div id="name"> {value} </div>
      <input type="text" name="name" onChange={handleChange} value={value} />
    </>
  );
}

export default App;
