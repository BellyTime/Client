import Gauge from "../Gauge";

export const CoolTimeList = ({  content, handleClickGauge }) => {
  const { foodId, foodName, gauge, foodImg, predictDate, leftDays } = content;
  return (
    <div className="flex-1" onClick={handleClickGauge}>
      <Gauge
        value={gauge}
        label={foodName}
        predictDate={predictDate}
        leftDays={leftDays}
        foodImg={foodImg}
      />
    </div>
  );
};
