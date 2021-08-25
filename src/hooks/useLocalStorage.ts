import { Dispatch, useState } from 'react';

/**
 * A hook to modify values from the localStorage object.
 *
 * @param key
 * @param initialValue
 * @returns a tuple with a parsed value and setter method.
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<T>] => {
  const [valueProxy, setValueProxy] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValueProxy(value);
    } catch {
      setValueProxy(value);
    }
  };

  return [valueProxy, setValue];
};
