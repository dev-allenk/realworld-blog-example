import { useState, useCallback } from "react";

interface Value {
  [index: string]: string;
}

const createNameValuePair = (obj: Value): { name: string; value: string }[] =>
  Object.keys(obj).map((key) => ({ name: key, value: obj[key] }));

export default function useInput(initialValue: Value) {
  const [inputValue, setInputValue] = useState(initialValue);

  const forceChange = useCallback((obj: Value) => {
    createNameValuePair(obj).forEach(({ name, value }) =>
      setInputValue((s) => ({ ...s, [name]: value }))
    );
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
