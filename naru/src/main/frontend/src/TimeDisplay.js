// TimeDisplay.js
import React, { useState, useEffect } from 'react';

const formatTime = (date) => {
  return `${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} ${date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }).split(" ")[0]}:${date.getMilliseconds().toString().padStart(2, "0").slice(0, 2)}`;
};

function TimeDisplay() {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(() => {
    const replaceTime = () => {
      setTime(formatTime(new Date()));
    };

    replaceTime(); // 초기 시간 설정
    const intervalId = setInterval(replaceTime, 30); // 20ms마다 시간 업데이트

    return () => clearInterval(intervalId); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (
    <div className="time">
      <p className="timeDisplay">{time}</p>
    </div>
  );
}

export default TimeDisplay;
