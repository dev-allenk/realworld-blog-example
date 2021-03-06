import { useState, useCallback } from "react";

interface Value {
  [index: string]: string;
}

export default function useInput<T extends Value>(initialValue: T) {
  const [inputValue, setInputValue] = useState(initialValue);

  const forceChange = useCallback((obj: T) => {
    setInputValue((s) => ({ ...s, ...obj }));
  }, []);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setInputValue((inputValue) => ({ ...inputValue, [name]: value }));
  }, []);

  const restore = useCallback((name) => {
    setInputValue({ ...inputValue, [name]: "" });
  }, []);

  return { inputValue, handleChange, restore, forceChange };
}
