
function ListGroup() {
    let items = ['Paris', 'London', 'Tokyo'];
    items = [];
    
    if (items.length === 0) {
        return <><h1>Test</h1><p>Paragraph</p></>
    }

    return (
      <>
          <h1>Testo</h1>
          <ul className="list-group">
            {items.map(item => <li key={item} className="list-group-item">{item}</li>)}
          </ul>
      </>
    );
  }
  
  export default ListGroup;
  