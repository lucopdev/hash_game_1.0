'use client';
import { MouseEvent } from 'react';
import { useState } from 'react';
import './board.css';
import ButtonReset from '../buttonReset/ButtonReset';
import Score from '../score/Score';
export default function Board() {
  const [player, setPlayer] = useState<boolean>(false); //tipar o estado
  const [boardSize, setBoardSize] = useState<number>(9);
  const [positionSequencePONE, setPositionSequencePONE] = useState<number[]>([]);
  const [positionSequencePTWO, setPositionSequencePTWO] = useState<number[]>([]);
  const [scoreOne, setScoreOne] = useState<number>(0);
  const [scoreTwo, setScoreTwo] = useState<number>(0);

  const makeDiv = (nSquares: number) => {
    let div = [];
    for (let i = 0; i < nSquares; i += 1) {
      div.push(
        <div
          onClick={(event) => checkSquare(event)}
          key={i}
          className="not-checked square p-0 m-0 square w-20 h-20 border-2 border-white bd-green-500"
          id={`${i + 1}`}
        ></div>
      );
    }
    return div;
  };

  const checkSquare = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event?.target as HTMLElement;
    const positionsOne = [];
    const positionsTwo = [];

    if (target) {
      if (target.className.includes('not-checked')) {
        target.classList.remove('not-checked');
        target.classList.add('checked');
        target.innerHTML = player ? 'X' : 'O';
        if (target.innerHTML === 'X') {
          positionsTwo.push(Number(target.id));
        }
        if (target.innerHTML === 'O') {
          positionsOne.push(Number(target.id));
        }
      }

      positionSequencePONE.push(...positionsOne.sort());
      positionSequencePTWO.push(...positionsTwo.sort());

      const winnings = [
        [1, 2, 3], // horizontal
        [4, 5, 6], // horizontal
        [7, 8, 9], // horizontal
        [1, 4, 7], // vertical
        [2, 5, 8], // vertical
        [3, 6, 9], // vertical
        [1, 5, 9], // diagonal
        [3, 5, 7], // diagonal
      ];

      const pOneWin = winnings.some((winning) =>
        winning.every((position) => positionSequencePONE.includes(position))
      );
      const pTwoWin = winnings.some((winning) =>
        winning.every((position) => positionSequencePTWO.includes(position))
      );

      pOneWin && setScoreOne(scoreOne + 1);
      pTwoWin && setScoreTwo(scoreTwo + 1);
    }

    setPlayer(!player);
  };

  return (
    <div className="flex flex-col border-4 rounded-2xl items-center justify-center w-6/12 h-3/4 background: bg-blue-500">
      <h1 className="m-3">Jogo da velha</h1>
      <div className="board box-border flex flex-wrap items-center justify-center w-60 h-fit background: bg-red-500">
        {makeDiv(boardSize)}
      </div>
      <Score scoreOne={scoreOne} scoreTwo={scoreTwo} />
      <ButtonReset
        innerText="Reset Game"
        boardSize={boardSize}
        resetOne={setPositionSequencePONE}
        resetTwo={setPositionSequencePTWO}
        valueOne={positionSequencePONE}
      />
      <ButtonReset
        innerText="Reset Points"
        boardSize={boardSize}
        resetOne={setScoreOne}
        resetTwo={setScoreTwo}
        valueOne={scoreOne}
      />
    </div>
  );
}
