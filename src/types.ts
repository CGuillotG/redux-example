import { Dispatch, SetStateAction, FormEvent } from 'react';

//---------------------------------------------------------------------------------------+

export type UserDetails = {
  username: string;
  age: number;
};

export type UserDetailsSetActions = {
  setUsername: Dispatch<SetStateAction<string>>;
  setAge: Dispatch<SetStateAction<number>>;
};

//---------------------------------------------------------------------------------------+

export type CustomHTMLFormElement = HTMLFormElement & {
  username: HTMLInputElement;
  age: HTMLInputElement;
};

export type CustomHTMLFormSubmitCallback = (
  event: FormEvent<CustomHTMLFormElement>
) => void;
