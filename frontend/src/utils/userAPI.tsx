import IFormSubmit from '@/interfaces/IFormSubmit';
import LoginFormValue from '@/interfaces/ILoginFormValue';
import tokenPayload from '@/interfaces/ITokenPayload';

const URLBase = 'http://localhost:3000';

export async function fetchApiRegister(payload: LoginFormValue) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  try {
    const URL = `${URLBase}/register`;
    const response = await fetch(URL, requestOptions);
    const data = await response.json();

    return data;
  } catch (e) {
    return { error: 'Impossible to register' };
  }
}

export async function fetchApiLogin(payload: LoginFormValue) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  try {
    const URL = `${URLBase}/login`;
    const response = await fetch(URL, requestOptions);
    const data = await response.json();

    return data;
  } catch (e) {
    return { error: 'Impossible to log in' };
  }
}

export async function fetchAuth(payload: tokenPayload) {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  try {
    const URL = `${URLBase}/api/auth`;
    const response = await fetch(URL, requestOptions);
    const data = await response.json();

    return data;
  } catch (e) {
    return { error: 'Invalid token' };
  }
}
