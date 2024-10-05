import { useState } from "react"; //MouseEvent,

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number | string>();
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

  //const handleClick = (event: MouseEvent) => console.log(event.target.value);

  return (
    <>
      <h1>{heading}</h1>
      {getMessage("Franceq")}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
