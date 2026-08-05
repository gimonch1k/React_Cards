import { useState } from "react";
import { delayFn } from "../helpers/delayFn";
import { API_URL } from "../constants";

export function useFetch(callback) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchFn = async (arg) => {
    try {
      setIsLoading(true);
      setError("");

      await delayFn();

      const response = await callback(arg);
      return response;
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchFn, isLoading, error];
}
