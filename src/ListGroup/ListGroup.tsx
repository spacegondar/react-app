function ListGroup() {
  let items = ["Paris", "London", "Tokyo"];
  items = [];

  const conditionalHtmlElement = (
    <>
      <h1>Test</h1>
      <p>Paragraphs</p>
    </>
  );

  return (
    <>
      <h1>Testo</h1>
      {items.length === 0 ? conditionalHtmlElement : null}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
