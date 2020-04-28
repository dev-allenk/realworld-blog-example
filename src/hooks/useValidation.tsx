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
  const setInValid = (property: string) => {
    setStatus({ [property]: { isValid: false } });
  };

  const checkValidation = ({ username, email, password }: Values) => {
    isEmailValid(email) ? setValid("email") : setInValid("email");
    isUsernameValid(username) ? setValid("username") : setInValid("username");
    isPasswordValid(password) ? setValid("password") : setInValid("password");
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
  return USERNAME_REGEXP.test(username) && !/\s/.test(username);
};

const isEmailValid = (email: string) => {
  return EMAIL_REGEXP.test(email) && !/\s/.test(email);
};

const isPasswordValid = (password: string) => {
  return PASSWORD_REGEXP.test(password) && !/\s/.test(password);
};
