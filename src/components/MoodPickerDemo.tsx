import { useState } from "react";

function MoodPickerDemo(): JSX.Element {
  const [moodValueFromCurrentRender, queueRerenderWithNewMoodValue] =
    useState("");
  const [favouriteMoodValueFromCurrentRender, queueRerenderWithNewFavouriteMood] =
    useState("");

  const handleMoodChangeToBathTime = () => {
    queueRerenderWithNewMoodValue("🛀🏻");
  };

  const handleMoodChangeToOld = () => {
    queueRerenderWithNewMoodValue("👵🏼");
  };

  const handleMoodChangeToStrong = () => {
    queueRerenderWithNewMoodValue("💪");
  };
  
  const handleMoodChangeToVerySad = () => {
    queueRerenderWithNewMoodValue("😭");
  };
  
  const handleMoodChangeToBlesed = () => {
    queueRerenderWithNewMoodValue("😇");
  };

  const handleMoodChangeToWoried = () => {
    queueRerenderWithNewMoodValue("😰");
  };
  const handleMoodChangeToRelaxed = () => {
    queueRerenderWithNewMoodValue("💆‍♀️");
  };
  const handleMoodChangeToLoveCats = () => {
    queueRerenderWithNewMoodValue("😻");
  };
  const handleMoodChangeToDead = () => {
    queueRerenderWithNewMoodValue("☠️");
  };
  const handleMoodChangeToSmart = () => {
    queueRerenderWithNewMoodValue("🤓");
  };

  const handleStoreCurrentMood = () => {
    queueRerenderWithNewFavouriteMood(moodValueFromCurrentRender);
  };

  
  return (
    <>
      <h1>Lauras Mood Picker</h1>
      <p>My mood right here, right now: {favouriteMoodValueFromCurrentRender}</p>
      <p>My new vibe: {moodValueFromCurrentRender}</p>
      <button onClick={handleMoodChangeToBathTime}>🛀🏻</button>
      <button onClick={handleMoodChangeToOld}>👵🏼</button>
      <button onClick={handleMoodChangeToStrong}>💪</button>
      <button onClick={handleMoodChangeToVerySad}>😭</button>
      <button onClick={handleMoodChangeToBlesed}>😇</button>
      <button onClick={handleMoodChangeToWoried}>😰</button>
      <button onClick={handleMoodChangeToRelaxed}>💆‍♀️</button>
      <button onClick={handleMoodChangeToLoveCats}>😻</button>
      <button onClick={handleMoodChangeToDead}>☠️</button>
      <button onClick={handleMoodChangeToSmart}>🤓</button>
      <hr />
      <button onClick={handleStoreCurrentMood}> Set my new vibe</button>
    </>
  );
}

export default MoodPickerDemo;
