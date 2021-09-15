import React from "react";

import "./styles.css";

type Props = {
  word: string;
  validKeys: Array<string>;
};

export function Words({ word, validKeys }: Props) {
  if (!word) return null;

  const joinedKeys = validKeys.join("");
  const matched = word.slice(0, joinedKeys.length);
  const remainder = word.slice(joinedKeys.length);

  return (
    <>
      <span className="matched">{matched}</span>
      <span className="remainder">{remainder}</span>
    </>
  );
}
