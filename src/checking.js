export default function checking(opens, setOpens) {
  const imgBack = "src\\img\\imgBack.png";
  if (opens[0].img == opens[1].img) {
    opens.forEach((card) => {
      const filterArr = opens.filter((v) => v.img !== card.img);
      setOpens(filterArr);
    });
  } else {
    setTimeout(
      (imgBack) => {
        opens.forEach((card) => {
          card.setUrl(imgBack);
        });
        setOpens([]);
      },
      500,
      imgBack
    );
  }
}

// let timer = 0;
// setInterval(() => {
//   timer++;
// }, 1000);
