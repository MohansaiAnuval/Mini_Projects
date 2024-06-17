import styles from "./Buttons.module.css";
const Buttons = ({ onclickButton }) => {
  const Buttons = [
    "c",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "0",
    "9",
    "=",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonscontainer}>
        {Buttons.map((button) => {
          return (
            <button
              key={button}
              className={styles.buttons}
              onClick={() => onclickButton(button)}
            >
              {button}
            </button>
          );
        })}
      </div>
    </>
  );
};
export default Buttons;
