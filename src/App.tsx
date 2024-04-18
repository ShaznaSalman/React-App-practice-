//import Message from "./Message";
/*function App()
{
  return <div><Message/></div>;
}
export default App;*/

import ListGroup from "./components/ListGroup";

function App() {
  let items = ["kurunegala", "kandy", "colombo"];
  return(
  <div>
    <ListGroup items={items} heading="Cities" />
    {/*<ListGroup />*/}
  </div>
  );
}

export default App;
