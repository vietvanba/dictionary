import React from "react";

function Greeting() {
  const currentTime = new Date().getHours();
  let greeting;

  if (currentTime >= 5 && currentTime < 12) {
    greeting = "Good morning";
  } else if (currentTime >= 12 && currentTime < 17) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return <div>{greeting}</div>;
}

export default Greeting;
