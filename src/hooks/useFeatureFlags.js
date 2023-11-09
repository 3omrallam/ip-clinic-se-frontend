import { useSelector } from "react-redux";
import { appSelector } from "../state/appSlice";

function useFeatureFlags() {
  const { featureFlags } = useSelector(appSelector);

  return featureFlags;
}

export default useFeatureFlags;
