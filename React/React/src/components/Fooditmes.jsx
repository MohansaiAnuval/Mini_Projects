import { useState } from "react";
import Item from "./Item";
const Fooditems = ({ healthyitems }) => {
  // let fruits = ["Apple", "Mango", "orange", "grapes", "Strawberry"];

  let [activeItems, setactiveitems] = useState([]);
  let onBuybutton = (healthyitems, event) => {
    let newItem = [...activeItems, healthyitems];
    setactiveitems(newItem);
  };

  return (
    <>
      <ul className="list-group">
        {healthyitems.map((item) => (
          <Item
            fruit={item}
            bought={activeItems.includes(item)}
            handlebuyButton={(event) => onBuybutton(item, event)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default Fooditems;
