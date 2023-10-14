import Image from 'next/image';
import Board from './components/board/Board';
import ButtonReset from './components/buttonReset/ButtonReset';

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen background-color: bg-yellow-600">
      <Board />
    </main>
  );
}
