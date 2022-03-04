import { useState, useEffect, useRef } from "react";

export const useFetch = (url) => {
  if (!url) {
    throw new Error("Required url");
  }

  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    console.log("useFetch Mounted");
    return () => {
      console.log("useFetch unMounted");
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({
      loading: true,
      error: null,
      data: null,
    });

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data,
          });
        }
      });
  }, [url]);

  return state;
};
