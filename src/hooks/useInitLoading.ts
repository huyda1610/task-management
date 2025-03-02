"use client";
import { useEffect, useRef } from "react";

const useInitLoading = (loading: boolean): boolean => {
  const initFlag = useRef<boolean>(false);

  useEffect(() => {
    if (loading && !initFlag.current) initFlag.current = true;
  }, [loading]);

  return loading && !initFlag.current;
};

export default useInitLoading;
