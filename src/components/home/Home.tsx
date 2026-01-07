import { Link } from "react-router-dom";
// import styles from "./styles.module.scss";
import { listNewHSKWordsLevel1 } from "../../store/newHSKLevel1";
import { useEffect, useState } from "react";

function Home() {
  const [listWords, setListWords] = useState(listNewHSKWordsLevel1);

  useEffect(() => {
    setListWords(listNewHSKWordsLevel1);
  }, []);

  return (
    <>
      <main>
        <h2>Списки HSK с пиньинем, значением, примерами</h2>

        <div>
          <h3>HSK 3.0</h3>

          <div>
            <div>
              <Link to={"/newhsk/level1"}>
                <h3>HSK 1</h3>
                <p>{listWords.length}</p>
              </Link>
            </div>
            <div>HSK 2</div>
            <div>HSK 3</div>
            <div>HSK 4</div>
            <div>HSK 5</div>
            <div>HSK 6</div>
            <div>HSK 7-9</div>
          </div>
        </div>

        <div>
          <h3>HSK 2.0</h3>

          <div>
            <div>HSK 1</div>
            <div>HSK 2</div>
            <div>HSK 3</div>
            <div>HSK 4</div>
            <div>HSK 5</div>
            <div>HSK 6</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
