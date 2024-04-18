//import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
  items: String[];
  heading: string;
}

function ListGroup({items, heading}:Props) {
  //let items = ["kurunegala", "kandy", "colombo"];

  //event handler
  //const handleClick = (event: MouseEvent) => console.log(event);

  //let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];

  /*if (items.length === 0)
    return(
      <>
        <h1>List</h1>
        <p>No items found</p>
      </>);   NOT A GOOD PRACTICE
  */
  //const message1 = items.length === 0 ? <p>No items found 1</p> : null;

  /*const getMessage = () => {
  return items.length === 0 ? <p>No items found 2</p> : null;
 }*/

  return (
    <>
      <h1>{heading}</h1>
      {
        //getMessage()
        //message1
        //items.length === 0 ? <p>No items found</p> : null
        items.length === 0 && <p>No items found 3</p>
      }

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            //className="list-group-item active"
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            //key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
            //onClick={handleClick}
            //onClick={(event) => console.log(event,"Clicked",item,index)}
          >
            {item}
          </li>
        ))}

        {/*<li className="list-group-item">An item</li>
      <li className="list-group-item">A second item</li>
      <li className="list-group-item">A third item</li>
      <li className="list-group-item">A fourth item</li>
      <li className="list-group-item">And a fifth one</li>*/}
      </ul>
    </>
  );
}

export default ListGroup;
