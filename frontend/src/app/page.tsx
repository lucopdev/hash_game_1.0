'use client';

import Board from './components/board/Board';
import { useCallback, useEffect } from 'react';
import { fetchAuth } from '@/utils/userAPI';
import { useRouter } from 'next/navigation';
import Chat from './components/chat/Chat';

export default function Home() {
  const router = useRouter();

  const verifyFunction = useCallback(async () => {
    const token = document.cookie.split('"')[1];
    const verifyToken = await fetchAuth({ token });

    if (verifyToken.status !== 'SUCCESSFUL') {
      router.push('/register');
    }
    document.cookie = `token=''`
  }, [router]);
  
  useEffect(() => {
    verifyFunction();
  }, []);

  return (
    <main className="flex flex-row items-center justify-evenly w-screen h-screen background-color: bg-yellow-600">
      <Chat />
      <Board />
    </main>
  );
}
