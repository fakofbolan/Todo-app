import { useState } from "react";

const defaultItems = [
  {
    id: 1,
    text: "Buy milk",
    done: false,
  },
  {
    id: 2,
    text: "Buy eggs",
    done: true,
  },
];

function App() {
  const [items, setItems] = useState(defaultItems);

  const itemComponents = items.map((item) => {
    return (
      <div key={item.id}>
        <input type="checkbox" checked={item.done} />
        {item.text}
      </div>
    );
  });

  return (
    <div className="App">
      <h1>Todo App</h1>
      {itemComponents}
    </div>
  );
}

export default App;
