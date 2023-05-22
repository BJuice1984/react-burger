import { ChangeEvent, useState } from 'react';

interface IValues {
  [value: string]: string;
}

export function useForm(inputValues:IValues = {}) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = e.target;
    setValues({...values, [name]: value});
  };
  return {values, handleChange, setValues};
}