import { useState } from "react";
import styles from "./styles.module.scss";
import { listNewHSKWordsLevel1 } from "../../store/newHSKLevel1";
import { Link } from "react-router-dom";

function Level() {
  const [listWords, setListWords] = useState(listNewHSKWordsLevel1);

  return (
    <>
      <div className={styles["level"]}>
        <h2>Список слов HSK1</h2>
        <h3>{listWords.length} слов</h3>

        <Link to={"/training"}>Тренировка</Link>

        <div className={styles["level-items"]}>
          {listWords.map((item) => (
            <div key={item.id} className={styles["level-item"]}>
              <p>{item.chinese}</p>
              <p>{item.pinin}</p>
              <p>{item.russian}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Level;
