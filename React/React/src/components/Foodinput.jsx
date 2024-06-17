import styles from "./Foodinput.module.css";

const Foodinput = ({ changeEvents, handleonChnagekey }) => {
  return (
    <>
      <input
        className={styles.FoodInput}
        type="text"
        placeholder="Enter Food items here "
        onChange={changeEvents}
        onKeyDown={handleonChnagekey}
      />
    </>
  );
};
export default Foodinput;
