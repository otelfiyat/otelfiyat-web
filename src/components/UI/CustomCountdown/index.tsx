import { useState, useEffect } from "react";

import { ClockIcon } from "@heroicons/react/24/outline";

interface CustomCountdownProps {
  initialTime: number;
  countdownStart?: () => void;
  countdownComplete?: () => void;
  countdownCompleteMessage: string;
}

const CustomCountdown = ({
  initialTime,
  countdownStart = () => {},
  countdownComplete = () => {},
  countdownCompleteMessage,
}: CustomCountdownProps) => {
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    countdownStart();

    const timerInterval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timerInterval);
          // Perform actions when the timer reaches zero
          countdownComplete();
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timerInterval);
  }, []); // The empty dependency array ensures the effect runs only once on mount

  // Convert seconds to hours, minutes, and seconds
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  //add 0 to the left of the number if it is less than 10
  const addZero = (num: number) => (num < 10 ? `0${num}` : num);

  return (
    <div className="flex items-center gap-1">
      <ClockIcon
        className={`w-7 h-7 font-bold ${
          timeRemaining ? "text-brand-primary-500" : "text-brand-negative"
        }`}
      />
      {timeRemaining ? (
        <span className="size-title2 font-medium text-brand-primary-500">
          {addZero(minutes)}:{addZero(seconds)}
        </span>
      ) : (
        <span className="size-body2 font-medium text-brand-negative">
          {countdownCompleteMessage}
        </span>
      )}
    </div>
  );
};

export default CustomCountdown;
