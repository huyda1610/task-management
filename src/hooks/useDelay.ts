import { useEffect, useState } from "react";

function useDelay(delay = 500) {
  const [isDelayed, setIsDelayed] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDelayed(false);
    }, delay);

    return () => clearTimeout(timer); // Clean up the timer when the component is unmounted or delay changes
  }, [delay]);

  return isDelayed;
}

export default useDelay;
