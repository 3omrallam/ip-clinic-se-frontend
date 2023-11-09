import { useState, useEffect, useCallback } from "react";

// Example debounce function (you can use a more robust implementation if needed)
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
}

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = useCallback(
    debounce(() => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 250), // Adjust the debounce delay as needed (e.g., 250 milliseconds)
    [],
  );

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return {
    isXs: screenSize.width < 576,
    isSm: screenSize.width < 768,
    isMd: screenSize.width < 992,
    isLg: screenSize.width < 1200,
    isXl: screenSize.width > 1200,
    screenSize: screenSize.width,
  };
}

export default useScreenSize;
