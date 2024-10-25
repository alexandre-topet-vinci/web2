import { useState } from "react";
import "./ClickCounter.css";

interface ClickCounterProps {
  title: string;
  on10Click?: string;
  onHover?: string;
}

const ClickCounter = ({
  title,
  on10Click = "Master",
  onHover = "ClickOnMe",
}: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="card">
      <h4>{title}</h4>
      {isHovered ? <p>{onHover}</p> : null}
      <button
        onClick={() => setCount((count) => count + 1)}
        onMouseEnter={() =>setIsHovered(true)}
        onMouseLeave={() =>setIsHovered(false)}
        >
        count is {count}
      </button>
      {count >= 10 ? <p>{on10Click}</p> : null}
    </div>
  );
};

export default ClickCounter;