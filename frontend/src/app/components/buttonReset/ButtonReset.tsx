export default function ButtonReset(props: any) {
  const resetGame = () => {
    const { boardSize, resetOne, resetTwo, valueOne } = props;
    const squares = document.getElementsByClassName('square') as HTMLCollectionOf<HTMLElement>;

    for (let i = 0; i < boardSize; i += 1) {
      squares[i].classList.remove('checked');
      squares[i].classList.add('not-checked');
      squares[i].innerHTML = '';

      if (typeof valueOne === 'number') {
        resetOne(0);
        resetTwo(0);
      } else {
        resetOne([]);
        resetTwo([]);
      }
    }
  };

  return (
    <div>
      <button onClick={resetGame} className="m-5 p-2 w-32 rounded-md border-2">
        {props.innerText}
      </button>
    </div>
  );
}
