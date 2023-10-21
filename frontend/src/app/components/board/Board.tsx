'use client';

import './board.css';
import Score from '../score/Score';
import { useState, useContext, useEffect } from 'react';
import AppContext from '@/context/AppContext';
import ButtonReset from '../buttonReset/ButtonReset';

export default function Board() {
  const [player, setPlayer] = useState<boolean>(false);
  const [boardSize, setBoardSize] = useState<number>(9);
  const [positionsOne, setPositionsOne] = useState<number[]>([]);
  const [positionsTwo, setPositionsTwo] = useState<number[]>([]);
  const [positionSequencePONE, setPositionSequencePONE] = useState<number[]>([]);
  const [positionSequencePTWO, setPositionSequencePTWO] = useState<number[]>([]);
  const [scoreOne, setScoreOne] = useState<number>(0);
  const [scoreTwo, setScoreTwo] = useState<number>(0);
  const { socket, setSocket } = useContext(AppContext);

  useEffect(() => {
    if (socket) {
      socket.on('recivedMove', makeMove);

      return () => {
        socket.off('recivedMove');
      };
    }
  }, [player, socket]);

  const makeDiv = (nSquares: number) => {
    let div = [];
    for (let i = 0; i < nSquares; i += 1) {
      div.push(
        <div
          onClick={(event) => sendTarget(event)}
          key={i}
          className="not-checked square p-0 m-0 square w-20 h-20 border-2 border-white bd-green-500"
          id={`${i + 1}`}
        ></div>
      );
    }
    return div;
  };

  const sendTarget = (event: React.MouseEvent<HTMLDivElement>): void => {
    const target = event?.target as HTMLElement;

    if (target) {
      socket.emit('makeMove', {
        id: Number(target.id),
        innerHTML: target.innerHTML,
      });
    }
  };

  const makeMove = (targetData: { id: number; innerHTML: string }) => {
    if (player) {
      console.log(targetData);
      const squares = document.querySelectorAll('.square');
      const targetSquare = Array.from(squares).find(
        (square) => Number(square.id) === targetData.id
      );

      if (targetSquare) {
        targetSquare.classList.remove('not-checked');
        targetSquare.classList.add('checked');
        targetSquare.innerHTML = 'X';
      }
    }

    if (!player) {
      console.log(targetData);
      const squares = document.querySelectorAll('.square');
      const targetSquare = Array.from(squares).find(
        (square) => Number(square.id) === targetData.id
      );

      if (targetSquare) {
        targetSquare.classList.remove('not-checked');
        targetSquare.classList.add('checked');
        targetSquare.innerHTML = 'O';
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

    // verificar quando vai enviar a pontuação
    // if (pOneWin || pTwoWin) {
    //   socket.emit('makeMove', scoreOne);
    // }

    setPlayer(!player);
  };

  return (
    <div className="flex flex-col border-4 rounded-2xl items-center justify-center w-6/12 h-3/4 bg-blue-500 shadow-inner">
      <h1 className="m-3"></h1>
      <div className="board box-border flex flex-wrap items-center justify-center w-60 h-fit bg-red-500">
        {makeDiv(boardSize)}
      </div>
      <Score scoreOne={scoreOne} scoreTwo={scoreTwo} />
      <div className="flex flex-col w-[50%] justify-center items-center border-2">
        <div>
          <h1>AREA DEV</h1>
        </div>
        <div className="flex">
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
      </div>
    </div>
  );
}
