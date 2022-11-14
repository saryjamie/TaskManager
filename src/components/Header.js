import Button from "./Button";

function Tasks({ title }) {
  const onClick = () => {
    console.log("CLICKED");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
}

export default Tasks;
