import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Hello World </h1>

      <button onClick={handleClick} className="border p-2 bg-red-500">
        {count}
      </button>
    </>
  );
}
