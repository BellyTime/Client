import { v4 as uuidv4 } from "uuid";
export const NotTodayFood = ({ coolTimeOfDay }) => {
  return (
    <>
      {coolTimeOfDay?.length
        ? coolTimeOfDay[0].data.map(({ foodName, foodId, foodImg }) => (
            <div key={uuidv4()}>
              <p>{foodName}</p>
              <img src={foodImg} className="h-20 w-20" />
            </div>
          ))
        : null}
    </>
  );
};
