import { useState, useEffect } from "react";
import { debounce } from "./common";

export const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    let elem = document.querySelector(".activity");
    elem.addEventListener("scroll", debounce(handleScroll, 500));
    return () =>
      elem.removeEventListener("scroll", debounce(handleScroll, 500));
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    callback();
  }, [isFetching]);

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  return [isFetching, setIsFetching];
};
