import styles from "./style.module.css";
import ImgCard from "../components/ImgCard";
import { useEffect, useState } from "react";
import Input from "../components/Input";
import checking from "../checking";

function Layout() {
  const [imgArr, setImgArr] = useState([]);
  const [opens, setOpens] = useState([]);
  const [pairs, setPairs] = useState([]); // זוגות

  useEffect(() => {
    if (opens.length == 2) {
      checking(opens, setOpens);
    }
  }, [opens]);

  return (
    <div className={styles.layout}>
      {imgArr.length == 0 && <Input setImgArr={setImgArr} />}
      {imgArr.length > 0 &&
        imgArr.map((img) => (
          <ImgCard img={img} setOpens={setOpens} isZoog={pairs.includes(img)} />
        ))}
    </div>
  );
}

export default Layout;