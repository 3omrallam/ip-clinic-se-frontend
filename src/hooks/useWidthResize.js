import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateCurrentWidth } from "../state/appSlice";

export function useWidthResize() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      let innerW = window.innerWidth;
      dispatch(updateCurrentWidth(innerW));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
}
