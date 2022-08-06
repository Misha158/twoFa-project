import { useEffect, useState } from "react";

export const useDebounce = (inputSearch, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(inputSearch);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputSearch);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [inputSearch]);

  return debouncedValue;
};
