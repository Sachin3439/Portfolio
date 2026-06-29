import "./css/Wave.css";

import { useEffect, useState } from "react";


export default function FallingStars({ trigger }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);

    const timer = setTimeout(() => {
      setActive(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [trigger]);

  return (
    <div className={`stars-container ${active ? "show" : ""}`}>
      {Array.from({ length: 30 }).map((_, i) => (
        <span
          key={i}
          className="star"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1.5}s`,
            animationDuration: `${2 + Math.random()}s`,
          }}
        />
      ))}
    </div>
  );
}