import { Reducer, useLayoutEffect, useReducer } from "react";

const reducer = (param: string) => (_oldState: string, newState: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(param, newState);
  window.location.search = searchParams.toString();
  return newState;
};

export const useQueryParam = (param: string, defaultValue = "") => {
  const getQueryParam = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    return params.get(param) ?? "";
  };

  const [queryParam, setQueryParam] = useReducer<Reducer<string, string>>(
    reducer(param),
    getQueryParam(),
  );

  useLayoutEffect(() => {
    if (!queryParam) {
      setQueryParam(defaultValue);
    }
  }, []);

  return [queryParam, setQueryParam] as const;
};
