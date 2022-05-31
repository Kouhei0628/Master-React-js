import React, { useEffect, useState } from "react";
import "./App.css";
import ColoringMessage from "./components/ColoringMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [switchFlag, setSwitchFlag] = useState(false);
  function onClickCountUp() {
    setNum(num + 1);
  }
  function onClickSwitchFlag() {
    setSwitchFlag(!switchFlag);
  }

  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      switchFlag || setSwitchFlag(true);
    } else {
      switchFlag && setSwitchFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColoringMessage color="brown">まさこです</ColoringMessage>
      <ColoringMessage color="orange">よろしく</ColoringMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickSwitchFlag}>!/?</button>
      {switchFlag && <p>!!!!!!!!!!</p>}
      {switchFlag || <p>??????????</p>}
    </React.Fragment>
  );
};

export default App;
