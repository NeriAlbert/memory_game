import { useRef, useState } from "react";
import styles from "./style.module.css";

function ImgCard({ img, setOpens, isZoog }) {
  const imgBack = "src\\img\\imgBack.png";
  const [url, setUrl] = useState(imgBack);

  const handleClick = () => {
    // isNotZoog
    setUrl((prev) => {
      if (prev !== img) {
        return img;
      }
      return imgBack;
    });

    // setOpens((prev) => {
    //   newOpen = { img, setUrl }
    //   if (!prev.includes(newOpen)) {
    //     return [...prev, newOpen];
    //   }
    //   return prev.filter((v) => v.img !== img);
    // });

    setOpens((prev) => {
      const newOpen = { img, setUrl };
      // debugger;
      return [...prev, newOpen];
    });
  };

  // const isZoog = () => {

  // };

  return (
    <img
      src={url}
      key={Date()}
      className={styles.image}
      onClick={isZoog ? null : handleClick}
    />
  );
}

export default ImgCard;

// animista.net - אתר CSS לקלפים וזה
