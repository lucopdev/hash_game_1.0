'use client';

import formValue from '@/interfaces/Iformvalue';
import { fetchApiLogin, fetchApiRegister } from '@/utils/userAPI';
import { ChangeEvent, FormEvent, ReactPropTypes, useState } from 'react';

export default function RegisterForm(props: any) {
  const [formValues, setFormValues] = useState<formValue>({
    username: '',
    password: '',
  });

  const loginFunc = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const payload = {
      username: formValues.username,
      password: formValues.password,
    };

    const test = await fetchApiLogin(payload);
    console.log(test);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form
      onSubmit={loginFunc}
      className="m-auto flex flex-col justify-center items-center w-64 h-64 bg-green-500"
    >
      <fieldset className="flex flex-col justify-end items-center w-56 h-56 bg-zinc-800">
        <div className="flex flex-col justify-evenly items-center mt-4 h-32">
          <input
            className="w-44 rounded text-black"
            type="text"
            placeholder="username"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
          <input
            className="w-44 rounded text-black"
            type="password"
            placeholder="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="border-2 rounded p-1 w-24 bg-green-500">
          {props.buttonType === 'login' ? 'Log in': 'Register'}
        </button>
      </fieldset>
    </form>
  );
}
