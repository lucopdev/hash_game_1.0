'use client';

import { useState } from 'react';
import './board.css'
export default function Board() {
  const [player, setPlayer] = useState(false); //tipar o estado

  const makeDiv = (nSquares: number) => {
    let div = [];
    for (let i = 0; i < nSquares; i += 1) {
      div.push(
        <div
          onClick={({ target }) => checkSquare(target)}
          key={i}
          className="not-checked square p-0 m-0 square w-20 h-20 border-2 border: white background: bg-green-500"
        >
          {i}
        </div>
      );
    }
    return div;
  };

  const checkSquare = (target): void => {
    if (player === false) {
      if (target.className.includes('not-checked')) {
        target.classList.remove('not-checked')
        target.classList.add('checked')
        target.innerHTML = 'X'
      }
    }

    if (player === true) {
      target.classList.remove('not-checked')
        target.classList.add('checked')
        target.innerHTML = 'O'
    }

    setPlayer(!player)
    console.log(player)
    // console.log(target.className)
    // console.log(target.className.includes('checked'))
  };

  return (
    <div className="flex flex-col border-4 rounded-2xl items-center justify-center w-6/12 h-3/4 background: bg-blue-500">
      <h1 className="m-3">Jogo da velha</h1>
      <div className="board box-border flex flex-wrap items-center justify-center w-60 h-fit background: bg-red-500">
        {makeDiv(9)}
      </div>
    </div>
  );
}
