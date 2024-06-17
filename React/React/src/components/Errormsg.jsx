const Errormsg = ({ fruit }) => {
  // let fruits = ["Apple", "Mango", "orange", "grapes", "Strawberry"];
  return <>{fruit.length === 0 && <h3>I am still hungry</h3>}</>;
};
export default Errormsg;
