import { useState } from "react";
import styles from "./style.module.css";

function ImgCard({ img, opens, setOpens }) {
  const imgBack = "src\\img\\imgBack.png";
  const [url, setUrl] = useState(imgBack);
  let k = Math.random(); // useEffect

  const handleClick = () => {
    setUrl((prev) => {
      if (prev !== img) {
        return img;
      }
      return imgBack;
    });

    setOpens((prev) => {
      if (!prev.includes(k)) {
        return [...prev, k];
      }
      return prev.filter((v) => v !== k);
    });
  };

  return (
    <img src={url} key={k} className={styles.image} onClick={handleClick} />
  );
}

export default ImgCard;
