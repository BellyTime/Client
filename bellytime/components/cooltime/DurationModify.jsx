import { useRecoilState } from "recoil";
import { setCoolTimeState } from "@/state/atom";

const DurationModify = ({ coolTimeSet, setCoolTimeSet }) => {
  return (
    <div className="flex">
      <button
        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg border border-gray-200 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() =>
          setCoolTimeSet((c) => {
            return { ...c, duration: coolTimeSet.duration - 1 };
          })
        }
        disabled={!coolTimeSet.duration}
      >
        -
      </button>
      <div className="font-medium">{coolTimeSet.duration}</div>
      <button
        className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg border border-gray-200 text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={() =>
          setCoolTimeSet((c) => {
            return { ...c, duration: coolTimeSet.duration + 1 };
          })
        }
      >
        +
      </button>
    </div>
  );
};

export { DurationModify };
