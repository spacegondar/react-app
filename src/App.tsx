import ListGruop from "./ListGroup";

function App() {
  const cities = ["London", "Paris", "Istanbul", "Berlin"];
  return (
    <div>
      <ListGruop items={cities} heading="Cities" />
    </div>
  );
}

export default App;
