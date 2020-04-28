import { useReducer, Reducer, useEffect } from "react";

interface Status {
  [idx: string]: { isValid: boolean };
}

interface Values {
  [idx: string]: string;
}

const USERNAME_REGEXP = /^[A-Za-z0-9_-]{4,15}$/;
const PASSWORD_REGEXP = /^[A-Za-z0-9]{8,20}$/;
const EMAIL_REGEXP = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*.[a-zA-Z]{2,3}$/;

function reducer<T>(prevState: T, newState: T) {
  return { ...prevState, ...newState };
}

export default function useValidation({
  username,
  email,
  password,
}: Values): [() => boolean] {
  const [status, setStatus] = useReducer<Reducer<Status, Status>>(
    reducer,
    createInitialStatus({ username, email, password })
  );

  const isAllValid = () => {
    return Object.keys(status).every((property) => status[property].isValid);
  };

  const setValid = (property: string) => {
    setStatus({ [property]: { isValid: true } });
  };

  const checkValidation = ({ username, email, password }: Values) => {
    if (isUsernameValid(username)) {
      setValid("username");
    }
    if (isEmailValid(email)) {
      setValid("email");
    }
    if (isPasswordValid(password)) {
      setValid("password");
    }
  };

  useEffect(() => {
    checkValidation({ username, email, password });
  }, [username, email, password]);

  return [isAllValid];
}

function createInitialStatus<T>(param: T): any {
  if (Array.isArray(param)) {
    return param.reduce(
      (acc, property) => ({ ...acc, [property]: { isValid: false } }),
      {}
    );
  }
  if (typeof param === "object") {
    return createInitialStatus(Object.keys(param));
  }
}

const isUsernameValid = (username: string) => {
  return USERNAME_REGEXP.test(username);
};

const isEmailValid = (email: string) => {
  return EMAIL_REGEXP.test(email);
};

const isPasswordValid = (password: string) => {
  return PASSWORD_REGEXP.test(password);
};
