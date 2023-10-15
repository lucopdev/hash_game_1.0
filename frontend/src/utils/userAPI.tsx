import formValue from '@/interfaces/Iformvalue';

export async function fetchApiRegister(payload: formValue) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  try {
    const URL = 'http://127.0.0.1:3000/api/register';
    const response = await fetch(URL, requestOptions);
    const data = await response.json();

    return data;
  } catch (e) {
    return { error: 'Não foi possível registrar o usuário' };
  }
}

export async function fetchApiLogin(payload: formValue) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  try {
    const URL = 'http://127.0.0.1:3000/api/login';
    const response = await fetch(URL, requestOptions);
    const data = await response.json();

    console.log(data.status);
    return data;
  } catch (e) {
    return { error: 'Não foi possível logar o usuário' };
  }
}
