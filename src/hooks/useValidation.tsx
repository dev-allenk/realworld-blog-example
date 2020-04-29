import { useReducer, Reducer, useEffect } from "react";

interface Status {
  [idx: string]: { isValid: boolean; isEmpty: boolean };
}
interface Action {
  type: string;
  payload: string;
}
interface Values {
  [idx: string]: string;
}

const USERNAME_REGEXP = /^[A-Za-z0-9_-]{4,15}$/;
const PASSWORD_REGEXP = /^[A-Za-z0-9]{8,20}$/;
const EMAIL_REGEXP = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*.[a-zA-Z]{2,3}$/;

function reducer(state: Status, { type, payload }: Action) {
  switch (type) {
    case "setValid":
      return { ...state, [payload]: { ...state[payload], isValid: true } };
    case "setInValid":
      return { ...state, [payload]: { ...state[payload], isValid: false } };
    case "setEmpty":
      return { ...state, [payload]: { ...state[payload], isEmpty: true } };
    case "setFilled":
      return { ...state, [payload]: { ...state[payload], isEmpty: false } };
    default:
      return state;
  }
}

export default function useValidation({
  username,
  email,
  password,
}: Values): [Status, () => boolean] {
  const [status, dispatch] = useReducer<Reducer<Status, Action>>(
    reducer,
    createInitialStatus({ username, email, password })
  );

  const isAllValid = () => {
    return Object.keys(status).every((property) => status[property].isValid);
  };

  const setValid = (property: string) => {
    dispatch({ type: "setValid", payload: property });
  };
  const setInValid = (property: string) => {
    dispatch({ type: "setInValid", payload: property });
  };
  const setEmpty = (property: string) => {
    dispatch({ type: "setEmpty", payload: property });
  };
  const setFilled = (property: string) => {
    dispatch({ type: "setFilled", payload: property });
  };

  const checkValidation = ({ username, email, password }: Values) => {
    isEmailValid(email) ? setValid("email") : setInValid("email");
    isUsernameValid(username) ? setValid("username") : setInValid("username");
    isPasswordValid(password) ? setValid("password") : setInValid("password");
  };

  const isEmpty = (value: string) => !value;

  const checkEmpty = ({ username, email, password }: Values) => {
    isEmpty(email) ? setEmpty("email") : setFilled("email");
    isEmpty(username) ? setEmpty("username") : setFilled("username");
    isEmpty(password) ? setEmpty("password") : setFilled("password");
  };

  useEffect(() => {
    checkEmpty({ username, email, password });
    checkValidation({ username, email, password });
  }, [username, email, password]);

  return [status, isAllValid];
}

function createInitialStatus<T>(param: T): any {
  if (Array.isArray(param)) {
    return param.reduce(
      (acc, property) => ({
        ...acc,
        [property]: { isValid: false, isEmpty: true },
      }),
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
