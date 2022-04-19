import { v4 as uuidv4 } from "uuid";
export const TodayFood = ({
  isToday,
  todayCheck,
  setChanged,
  setCheckFood,
  changed,
  checkFood,
}) => {
  return (
    <>
      {isToday &&
        todayCheck &&
        todayCheck.map(({ foodName, foodId, foodImg, eat }) => (
          <div key={uuidv4()}>
            <p>{foodName}</p>
            <img src={foodImg} className="h-20 w-20" />
            <button
              onClick={() => {
                if (eat == true) {
                  setChanged(changed.filter((val, idx) => val !== foodId));
                } else if (eat == false) {
                  setChanged([...changed, foodId]);
                }
                setCheckFood(
                  checkFood.map((item) =>
                    item.foodId == foodId ? { ...item, eat: true } : item
                  )
                );
              }}
              className={`${
                checkFood &&
                checkFood.filter((item) => item.foodId == foodId)[0]?.eat &&
                "text-red-300"
              }`}
            >
              먹음
            </button>
            <button
              onClick={() => {
                if (eat == false) {
                  setChanged(changed.filter((val, idx) => val !== foodId));
                } else if (eat == true) {
                  setChanged([...changed, foodId]);
                }
                setCheckFood(
                  checkFood.map((item) =>
                    item.foodId == foodId ? { ...item, eat: false } : item
                  )
                );
              }}
              className={`${
                checkFood &&
                !checkFood.filter((item) => item.foodId == foodId)[0]?.eat &&
                "text-red-300"
              }`}
            >
              먹지않음
            </button>
          </div>
        ))}
    </>
  );
};
