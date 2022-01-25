import { arc } from "d3-shape";
import { scaleLinear } from "d3-scale";
const Gauge = ({ value = 50, min = 0, max = 100, label, units }) => {
  const backgroundArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    .cornerRadius(1)();
  const percentScale = scaleLinear().domain([min, max]).range([0, 1]);
  const percent = percentScale(value);
  const angleScale = scaleLinear()
    .domain([0, 1])
    .range([-Math.PI / 2, Math.PI / 2])
    .clamp(true);
  const angle = angleScale(percent);
  const filledArc = arc()
    .innerRadius(0.65)
    .outerRadius(1)
    .startAngle(-Math.PI / 2)
    .endAngle(angle)
    .cornerRadius(1)();
  return (
    <div>
      <svg
        width="9em"
        viewBox={[-1, -1, 2, 1].join(" ")}
        className="border-solid border-4 border-pink-600 hover:border-dotted"
      >
        <path d={backgroundArc} fill="#dbdbe7" />
      </svg>
    </div>
  );
};

export default Gauge;
