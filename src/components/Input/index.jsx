import styles from "./style.module.css";
import { useRef } from "react";
import newArr from "../../newArr";

function Input({ setImgArr }) {
  const inputRef = useRef();

  const handleClick = (e) => {
    const num = inputRef.current.value / 2;
    const arr = newArr(num);
    if (arr) {
      setImgArr(arr);
    }
  };
  return (
    <div className={styles.Input}>
      <h3 className={styles.title}>משחק זכרון</h3>
      <div className={styles.select}>
        <span className={styles.span}>בחר מספר כרטיסים</span>
        <input
          type="number"
          min={10}
          max={82}
          step={2}
          className={styles.input}
          ref={inputRef}
          placeholder="10-82"
          onKeyDown={(e) => {
            if (e.code == "Enter") {
              {
                handleClick();
              }
            }
          }}
        />
        <div className={styles.submit} onClick={handleClick}>
          התחל
        </div>
      </div>
    </div>
  );
}

export default Input;
