export default function StepsList({ steps, prepared }) {
  const StepsListItems = steps.map((step, index) => {
    return <li key={index}>{step}</li>;
  });
  return (
    <ol className={prepared ? "" : "itemsNotReady"}>
      {StepsListItems}
    </ol>
  );
}
