
function DessertsList(props) {
  const listItems = props.data.map(dessert => {
    const itemText = `${dessert.name} - ${dessert.calories}`
    return <li>{itemText}</li>
  })
  return (
    <div>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default DessertsList;
