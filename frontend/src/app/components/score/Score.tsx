import { useEffect, useState } from 'react';

export default function Score(props: any) {
  const { scoreOne, scoreTwo } = props;
  const [scorePlayerOne, setScorePLayerOne] = useState<number>(0);
  const [scorePlayerTwo, setScorePLayerTwo] = useState<number>(0);

  useEffect(() => {
    setScorePLayerOne(scoreOne);
    setScorePLayerTwo(scoreTwo);
  }, [scoreOne, scoreTwo]);

  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-28 h-24 items-center justify-center bg-blue-900 m-5">
        <h1>PLAYER ONE</h1>
        <p className="text-2xl">{scorePlayerOne}</p>
      </div>
      <div className="flex flex-col w-28 h-24 items-center justify-center bg-green-900 m-5">
        <h1>PLAYER TWO</h1>
        <p className="text-2xl">{scorePlayerTwo}</p>
      </div>
    </div>
  );
}
