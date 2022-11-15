import Button from "./Button";

function Tasks({ title, onAdd, showAdd }) {
  // const onClick = (showAddTask) => {
  //   console.log("CLICKED");

  // };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
}

export default Tasks;
