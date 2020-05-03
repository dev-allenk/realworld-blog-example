import { useState, useEffect, useMemo } from "react";

interface FetchParams {
  onRequest(p: any): Promise<Response>;
  onSuccess?(p: any): void;
  onError?: () => void | object;
  watch?: any[] | string | number | object;
  autoFetch?: boolean;
  loadStatus?: boolean;
}

const useFetch = ({
  onRequest,
  onSuccess,
  onError,
  watch,
  autoFetch,
  loadStatus,
}: FetchParams) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const watchingValue = useMemo(() => getWatchingValue(watch), [watch]);

  const request = async (param?: any) => {
    try {
      if (loadStatus) setLoading(true);
      const res = await onRequest(param);

      if (res instanceof Promise) throw Error("REQUEST FAILED");
      if (!res.ok) throw Error(res.status.toString());
      if (res.status === 204) throw Error(res.status.toString());

      const response = (res.headers.get("Content-Type") || "").includes("json")
        ? await res.json()
        : res;
      onSuccess ? onSuccess(response) : setData(response);
    } catch (error) {
      if (!onError) setError(error);
      if (isFunction(onError)) onError!();
      else handleFetchError(error, onError);
    } finally {
      if (loadStatus) setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch || watch) {
      request();
    }
  }, [...watchingValue]);

  return loadStatus
    ? { data, error, loading, request }
    : { data, error, request };
};

export default useFetch;

const isFunction = (func: any) => typeof func === "function";

const getWatchingValue = (watch: any) => {
  if (Array.isArray(watch)) {
    return watch;
  }
  return [watch];
};

const handleFetchError = (error: any, errorMap: any) => {
  if (!error) return;

  const statusCode = Number(error.message);

  if (!errorMap && statusCode === 204) {
    console.warn("status code 204에 대한 처리가 필요합니다.");
    return alert("NO_CONTENT");
  }
  if (!errorMap) return console.warn(error);

  const handler = errorMap[statusCode];
  if (typeof handler === "string") return alert(handler);
  if (typeof handler === "function") return handler();

  if (!handler) {
    console.warn(error);
    console.warn("errorMap에 정의하지 않은 에러입니다.");
    return alert("UNKNOWN_ERROR");
  }
};
