import ListGruop from "./ListGroup";

function App() {
  const cities = ["London", "Paris", "Istanbul", "Berlin"];

  const handleSelectItem = (item: string) => {
    console.log("On Event Fire", item);
  };

  return (
    <div>
      <ListGruop
        items={cities}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
