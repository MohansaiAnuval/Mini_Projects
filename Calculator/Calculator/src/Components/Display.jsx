import styles from "./Display.module.css";
const Display = ({ displaycontent }) => {
  return (
    <>
      <input
        type="text"
        className={styles.input}
        value={displaycontent}
        readOnly
      />
    </>
  );
};
export default Display;
