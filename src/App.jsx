import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import List from "./components/List";
import Status from "./components/Status";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handelDeleteItem(id) {
    console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <List
        items={items}
        onDeleteItem={handelDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Status items={items} />
    </>
  );
}

export default App;
