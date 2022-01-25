

const Gauge = ({ value = 50, min = 0, max = 100, label, units }) => {
    const arcGenerator = d3
      .arc()
      .innerRadius(25)
      .outerRadius(40)
      .startAngle(0)
      .endAngle(5.5)
      .padAngle(0)
      .cornerRadius(20);
    const arcPath = arcPathGenerator();
  return (
    <div>
      <svg
        width="9em"
        viewBox={[-1, -1, 2, 1].join(" ")}
        className="border-solid border-4 border-pink-600 hover:border-dotted"
      ></svg>
    </div>
  );
};

export default Gauge;
