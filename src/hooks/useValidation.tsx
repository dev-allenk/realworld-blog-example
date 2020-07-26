import { useReducer, Reducer, useEffect } from "react";

type IsAllValid = () => boolean;

interface Action<P> {
  type: string;
  payload: P;
}
interface Values {
  [idx: string]: string;
}
interface ValidConditions {
  [idx: string]: (s: string) => boolean;
}
interface StatusValue {
  isValid: boolean;
  isEmpty: boolean;
}
type Status<T> = { [P in keyof T]: StatusValue };

/**
 *
 * @param values {object} 유효성 검사할 객체 형태의 값. 메모이제이션된 값이어야 합니다.
 * @param validConditions {object} 유효한 조건에서 true를 리턴하는 함수를 담은 객체
 */
export default function useValidation<T extends Values>(
  values: T,
  validConditions: ValidConditions
): [Status<T>, IsAllValid] {
  type P = keyof T;
  const [status, dispatch] = useReducer<Reducer<Status<T>, Action<P>>>(
    reducer,
    createInitialStatus(values)
  );

  function reducer(state: Status<T>, { type, payload }: Action<P>) {
    switch (type) {
      case "setValid":
        return {
          ...state,
          [payload]: { ...state[payload], isValid: true },
        };
      case "setInValid":
        return {
          ...state,
          [payload]: { ...state[payload], isValid: false },
        };
      case "setEmpty":
        return { ...state, [payload]: { ...state[payload], isEmpty: true } };
      case "setFilled":
        return { ...state, [payload]: { ...state[payload], isEmpty: false } };
      default:
        return state;
    }
  }

  const isAllValid = () => {
    return Object.keys(status).every(
      (property) => status[property as P].isValid
    );
  };

  const setValid = (property: P) => {
    dispatch({ type: "setValid", payload: property });
  };
  const setInValid = (property: P) => {
    dispatch({ type: "setInValid", payload: property });
  };
  const setEmpty = (property: P) => {
    dispatch({ type: "setEmpty", payload: property });
  };
  const setFilled = (property: P) => {
    dispatch({ type: "setFilled", payload: property });
  };

  const isValid = (values: T, key: string) => validConditions[key](values[key]);

  const checkValidation = (values: T) => {
    try {
      Object.keys(values).forEach((key) => {
        isValid(values, key) ? setValid(key) : setInValid(key);
      });
    } catch (error) {
      console.warn(error);
      console.warn(
        'Check proper validation function exists in "validConditions object"'
      );
    }
  };

  const isEmpty = (value: string) => !value;

  const checkEmpty = (values: T) => {
    Object.keys(values).forEach((key) =>
      isEmpty(values[key]) ? setEmpty(key) : setFilled(key)
    );
  };

  useEffect(() => {
    checkEmpty(values);
    checkValidation(values);
  }, [values]);

  return [status, isAllValid];
}

function createInitialStatus<T>(param: T): any {
  console.log(param);
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
