import { useReducer, Reducer, useEffect } from "react";

interface Status {
  [idx: string]: { isValid: boolean; isEmpty: boolean };
}
type IsAllValid = () => boolean;

interface Action {
  type: string;
  payload: string;
}
interface Values {
  [idx: string]: string;
}
interface IsValid {
  [idx: string]: (s: string) => boolean;
}

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

//TODO: 리턴 타입 추론 가능하도록 수정
/**
 *
 * @param values 유효성 검사할 객체 형태의 값. 메모이제이션된 값이어야 합니다.
 * @param isValid
 */
export default function useValidation<T extends Values, K extends IsValid>(
  values: T,
  isValid: K
): [Status, IsAllValid] {
  const [status, dispatch] = useReducer<Reducer<Status, Action>>(
    reducer,
    createInitialStatus(values)
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

  const checkValidation = (values: T) => {
    try {
      Object.keys(values).forEach((key) => {
        isValid![key](values[key]) ? setValid(key) : setInValid(key);
      });
    } catch (error) {
      console.warn(error);
      console.warn(
        'Check proper validation function exists in "isValid object"'
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
    isValid && checkValidation(values);
  }, [values]);

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
