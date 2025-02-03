import ListGroup from "./components/ListGroup";

function App() {
  let items= ["India","USA","UK","Canada","Australia"];

  return (
  <div>
    <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;