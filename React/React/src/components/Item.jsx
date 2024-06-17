import m from "./Item.module.css";
let Item = ({ fruit, bought, handlebuyButton }) => {
  // let fruits = ["Apple", "Mango", "orange", "grapes", "Strawberry"];

  const EventClicked = (event) => {
    console.log(event);
    console.log(`${fruit} is Buyed`);
  };
  return (
    <>
      <li
        key={fruit}
        className={`list-group-item ${m.items} ${bought && "active"}`}
      >
        <span>{fruit}</span>
        <button
          className={`${m.buttonsBuy} btn btn-info`}
          onClick={handlebuyButton}
        >
          Buy
        </button>
      </li>
    </>
  );
};

export default Item;
