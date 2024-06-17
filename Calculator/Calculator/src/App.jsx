import "bootstrap/dist/css/bootstrap.min.css";
import Display from "./Components/Display";
import styles from "./App.module.css";
import Buttons from "./Components/Buttons";
import { useState } from "react";
function App() {
  const [displayval, setdisplayval] = useState("");

  const onclickButton = (button) => {
    if (button === "c") {
      setdisplayval("");
    } else if (button === "=") {
      const result = eval(displayval);
      setdisplayval(result);
    } else {
      let newtext = displayval + button;
      setdisplayval(newtext);
    }
  };

  return (
    <div className={styles.Calculatorouter}>
      <Display displaycontent={displayval}></Display>
      <Buttons onclickButton={onclickButton}></Buttons>
    </div>
  );
}

export default App;
