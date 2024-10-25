import { useState } from "react";
import "./ClickCounter.css";

interface ClickCounterProps {
  title: string;
  on10Click: string;
  
}

const ClickCounter = ({
  title,
  on10Click = "Master"
}: ClickCounterProps) => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h4>{title}</h4>
      <button
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      {count >= 10 ? <p>{on10Click}</p> : null}
    </div>
  );
};

export default ClickCounter;