import "bootstrap/dist/css/bootstrap.min.css";
import Errormsg from "./components/Errormsg";
import Fooditems from "./components/Fooditmes";
import "./App.css";
import Container from "./components/Container";
import Foodinput from "./components/Foodinput";
import { useState } from "react";

function App() {
  let [fruits, setfruitsmethod] = useState([]);

  const handleonChnagekey = (event) => {
    if (event.key === "Enter") {
      let newfood = event.target.value;
      event.target.value = "";
      let oldfooditems = [...fruits, newfood];
      setfruitsmethod(oldfooditems);
    }
    console.log(event);
    statevariabble = statemethod(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="FoodHeading">Healthy Foods</h1>
        <Foodinput handleonChnagekey={handleonChnagekey}></Foodinput>
        {/* <p>{statevariabble}</p> */}
        <Fooditems healthyitems={fruits}></Fooditems>
        <Errormsg fruit={fruits}></Errormsg>
      </Container>
    </>
  );
}

export default App;
