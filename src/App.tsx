import React, { useEffect, useState } from "react";
import "./index.css";
import wordList from "./resources/words.json";
import { Words } from "./components/Words";

const maxTypedKeys = 30;

function getWord() {
  const index = Math.floor(Math.random() * wordList.length);
  const word = wordList[index];
  return word.toLowerCase();
}

function isValidKey(key: string, word: string) {
  if (!word) return false;
  const result = word.split("").includes(key);
  return result;
}

function App() {
  const [typedKey, setTypedKeys] = useState([""]);
  const [validKeys, setValidKeys] = useState<Array<string>>([]);
  const [word, setWord] = useState("");

  function handleKeyDown(e: React.KeyboardEvent) {
    e.preventDefault();
    const { key } = e;
    setTypedKeys((prevTypedKeys) =>
      [...prevTypedKeys, key].slice(-1 * maxTypedKeys)
    );

    if (isValidKey(key, word)) {
      setValidKeys((prev) => {
        const isValidLength = prev.length <= word.length;
        const isNextChar = isValidLength && word[prev.length] === key;

        return isNextChar ? [...prev, key] : prev;
      });
    }
    console.log(key);
  }

  useEffect(() => {
    setWord(getWord());
  }, []);

  return (
    <div className="container" tabIndex={0} onKeyDown={handleKeyDown}>
      <div className="valid-keys">
        <Words word={word} validKeys={validKeys} />
      </div>
      <div className="typed-keys">{typedKey ? typedKey.join(" ") : null}</div>
      <div className="completed-words">
        <ol>
          <li>cidade</li>
          <li>carro</li>
          <li>profissional</li>
        </ol>
      </div>
    </div>
  );
}

export default App;
