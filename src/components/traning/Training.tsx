import { useEffect, useState } from "react";
import { listNewHSKWordsLevel1 } from "../../store/newHSKLevel1";

function Training() {
  const [listWords, setListWords] = useState(listNewHSKWordsLevel1);
  const [listNumbers, setListNumbers] = useState([]);
  const [rigthAnswer, setRightAnswer] = useState(listWords[0].chinese);
  // const [listPassedWords, setListPassedWords] = useState([]);
  const [count, setCount] = useState(0);

  const shaffle = () => {
    let listVars: any = [];
    listVars[0] = listWords[count].id;
    setRightAnswer(listWords[count].chinese);

    for (let i = 1; i < 6; i++) {
      let newNumber = Math.floor(Math.random() * listWords.length);
      while (listVars.includes(newNumber)) {
        newNumber = Math.floor(Math.random() * listWords.length);
      }
      listVars[i] = listWords[newNumber].id;
    }

    listVars.sort(() => 0.5 - Math.random());
    setListNumbers(listVars);
    console.log(listVars);
  };

  useEffect(() => {
    setListWords(listNewHSKWordsLevel1);
  }, []);

  useEffect(() => {
    shaffle();
  }, [count]);

  const onClickVar = (item: any) => {
    if (item == rigthAnswer) {
      console.log("right");
    } else {
      console.log("wrong");
    }
    setTimeout(() => {
      let newCount = count + 1;
      newCount =
        newCount > listWords.length - 1 ? listWords.length - 1 : newCount;
      setCount(newCount);
    }, 1000);
  };

  return (
    <>
      <div>Тренировка {count}</div>

      <div>
        <div onClick={() => onClickVar(listWords[listNumbers[0]].chinese)}>
          {listNumbers.length && listWords[listNumbers[0]].chinese}
        </div>
        <div onClick={() => onClickVar(listWords[listNumbers[1]].chinese)}>
          {listNumbers.length && listWords[listNumbers[1]].chinese}
        </div>
        <div onClick={() => onClickVar(listWords[listNumbers[2]].chinese)}>
          {listNumbers.length && listWords[listNumbers[2]].chinese}
        </div>
        <div onClick={() => onClickVar(listWords[listNumbers[3]].chinese)}>
          {listNumbers.length && listWords[listNumbers[3]].chinese}
        </div>
        <div onClick={() => onClickVar(listWords[listNumbers[4]].chinese)}>
          {listNumbers.length && listWords[listNumbers[4]].chinese}
        </div>
        <div onClick={() => onClickVar(listWords[listNumbers[5]].chinese)}>
          {listNumbers.length && listWords[listNumbers[5]].chinese}
        </div>
      </div>
    </>
  );
}

export default Training;
