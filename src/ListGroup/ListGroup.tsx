import { MouseEvent } from "react";

function ListGroup() {
  const items = ["Paris", "London", "Tokyo"];

  const getMessage = (countryName: string) => {
    return (
      items.length === 0 && (
        <>
          <h1>Test</h1>
          <p>{countryName}</p>
        </>
      )
    );
  };

  const handleClick = (event: MouseEvent) => console.log(event.target.value);

  return (
    <>
      <h1>Testo</h1>
      {getMessage("Franceq")}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            value={item + index}
            className="list-group-item"
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
