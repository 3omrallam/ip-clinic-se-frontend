import { useSelector } from "react-redux";
import { appSelector } from "../state/appSlice";

function useRoles() {
  const { userRoles } = useSelector(appSelector);

  return userRoles;
}

export default useRoles;
