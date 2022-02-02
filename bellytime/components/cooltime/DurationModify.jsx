import { useRecoilValue } from "recoil";
import { setCoolTimeState } from "@/state/atom";

const DurationModify = () => {
  const coolTimeSet = useRecoilValue(setCoolTimeState);

  return <>{coolTimeSet.duration}</>;
};

export { DurationModify };
