import AppContext from '@/context/AppContext';
import { ChangeEvent, useContext, useEffect, useState } from 'react';

export default function Chat() {
  const [chatText, setChatText] = useState<string>('');
  const [socketMsgRecived, setSocketMgsRecived] = useState<JSX.Element[]>([]);
  const { socket, setSocket } = useContext(AppContext);

  const msgReciveFunc = (message: string) => {
    setSocketMgsRecived((prevState) => [...prevState, <p key={message}>{message}</p>]);
  };

  useEffect(() => {
    if (socket) {
      socket.on('recivedMessage', msgReciveFunc);

      return () => {
        socket.off('recivedMessage', msgReciveFunc);
      };
    }
  }, [socket]);

  const emitMsg = () => {
    socket.emit('message', chatText);
    setChatText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      emitMsg();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChatText(value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold">Be polited :)</h1>
      </div>
      <div className="flex flex-col w-[450px] h-[450px] justify-between items-center bg-slate-400 bg-opacity-75 rounded shadow-lg">
        <div id="output" className="flex flex-col w-[100%] pt-5 pl-5">
          {socketMsgRecived}
        </div>
        <div className="flex w-[100%] justify-between">
          <input
            onKeyDown={(e) => handleKeyPress(e)}
            onChange={handleChange}
            value={chatText}
            className="flex text-slate-800 w-4/5 h-[30px] font-medium border-2 bg-slate-400 bg-opacity-50 resize-none overflow-hidden"
          />
          <button onClick={emitMsg} className="w-1/5 h-[30px] rounded-md bg-green-600 shadow-md">
            send
          </button>
        </div>
      </div>
    </div>
  );
}
