import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("confused");

  const handleMoodChangeToHappy = () => {
    queueRerenderWithNewMoodValue("happy");
  };

  const handleMoodChangeToConfused = () => {
    queueRerenderWithNewMoodValue("confused");
  };

  const handleMoodChangeToSad = () => {
    queueRerenderWithNewMoodValue("sad");
  };
  
  const handleMoodChangeToCry = () => {
    queueRerenderWithNewMoodValue("cry");
  };
  
  const handleMoodChangeToBlesed = () => {
    queueRerenderWithNewMoodValue("blesed");
  };

  const handleMoodChangeToWoried = () => {
    queueRerenderWithNewMoodValue("woried");
  };

  
  return (
    <>
      <h1>Mood Picker Demo</h1>
      <p>Chosen mood: {moodValueFromCurrentRender.toUpperCase()}</p>
      <button onClick={handleMoodChangeToHappy}>😀</button>
      <button onClick={handleMoodChangeToConfused}>🤔</button>
      <button onClick={handleMoodChangeToSad}>😢</button>
      <button onClick={handleMoodChangeToCry}> 😭</button>
      <button onClick={handleMoodChangeToBlesed}>😇</button>
      <button onClick={handleMoodChangeToWoried}>😰</button>
    </>
  );
}

export default MoodPickerDemo;
