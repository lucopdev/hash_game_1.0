import { ChangeEvent, useEffect, useState } from 'react';
// import io, { Socket } from 'socket.io-client';

// let socket;

export default function Chat() {
  const [chatText, setChatText] = useState<string>('');
  // const [socket, setSocket] = useState<Socket | null>(null);

  // const fetchWS = async () => {
  //   const server = await fetch('http://127.0.0.1:/3000');

  //   // socket = io();
  //   // setSocket(newSocket);

  //   socket.on('send', (data) => {
  //     console.log(data)
  //   });

  // }
  
  useEffect(() => {
    // fetchWS()

    // return () => {
    //   socket.disconnect();
    // };
  }, []);

  const sendText = () => {
    const output = document.getElementById('output');
    const paragraph = document.createElement('p');
    paragraph.innerHTML = chatText;
    output?.append(paragraph);
    setChatText('');

    // socket?.emit('recive', {
    //   chatText,
    // });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChatText(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      sendText();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="font-bold">Be polited :)</h1>
      </div>
      <div className="flex flex-col w-[450px] h-[450px] justify-between items-center bg-slate-400 bg-opacity-75 rounded shadow-lg">
        <div id="output" className="flex flex-col w-[100%] pt-5 pl-5"></div>
        <div className="flex w-[100%] justify-between">
          <input
            onKeyDown={(e) => handleKeyPress(e)}
            onChange={handleChange}
            value={chatText}
            className="flex text-slate-800 w-4/5 h-[30px] font-medium border-2 bg-slate-400 bg-opacity-50 resize-none overflow-hidden"
          />
          <button onClick={sendText} className="w-1/5 h-[30px] rounded-md bg-green-600 shadow-md">
            send
          </button>
        </div>
      </div>
    </div>
  );
}
