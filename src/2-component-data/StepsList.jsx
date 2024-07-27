export default function StepsList({ steps }) {
  const StepsListItems = steps.map((step, index) => {
    return (
      <li key={index}>
        {step}
      </li>
    );
  });
  return <ol>{StepsListItems}</ol>;
}