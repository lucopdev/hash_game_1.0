'use client';

import { useState } from 'react';
import RegisterForm from '../components/registerForm/RegisterForm';
import './register.css';

export default function Register() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const registerFunction = () => {
    setIsModalOpen(true);
  };

  const closeFunction = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col mt-32 justify-center items-center">
      <h1 className="text-shadow flex flex-col justify-center items-center text-2xl m-5 text-white antialiased">
        JOGO DA VELHA <p>ONLINE</p>
      </h1>
      <RegisterForm buttonType={'login'} />
      <button onClick={registerFunction} className="mt-5">
        Crie sua conta
      </button>
      {isModalOpen && (
        <div className="fade-in absolute top-0 flex flex-col pt-[70px] items-center w-screen h-screen bg-zinc-800 bg-opacity-80">
          <div className="flex flex-col justify-center items-center w-[90%] h-[500px] rounded bg-zinc-900 bg-opacity-80">
            <h1 className="text-[30px] mb-[35px]">Crie sua conta</h1>
            <RegisterForm closeFunction={closeFunction} buttonType={'register'} />
          </div>
          <button onClick={closeFunction}>Fechar</button>
        </div>
      )}
    </div>
  );
}
