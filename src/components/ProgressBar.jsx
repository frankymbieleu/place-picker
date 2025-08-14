import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    if (remainingTime <= 0) return; // Stop si déjà à zéro

    const interval = setInterval(() => {
      console.log("LOAD SET INTERVAL");
      setRemainingTime(prevTime => {
        if (prevTime <= 10) { // Dernier tick
          clearInterval(interval);
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [remainingTime]); // Dépend de remainingTime

  return <progress value={remainingTime} max={timer} />;
}
