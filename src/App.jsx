import { useState } from "react";
import { TodoItem } from "./components/TodoItem";

function App() {
  const [items, setItems] = useState([]);
  const [formState, setFormState] = useState({
    text: "",
  });
  const [sort, setSort] = useState("createdAtDesc");

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  const handleMarkItemAsDone = (id, done) => {
    setItems(
      items.map((newItem) => {
        if (newItem.id === id) {
          return { ...newItem, done: !done };
        }
        return newItem;
      })
    );
  };

  const handleDeleteItem = (id) => {
    setItems(
      items.filter((newItem) => {
        return newItem.id !== id;
      })
    );
  };

  const itemComponents = items
    .sort((a, b) => {
      if (sort === "createdAtAsc") {
        return a.createdAt - b.createdAt;
      }
      return b.createdAt - a.createdAt;
    })
    .map((item) => {
      return (
        <TodoItem
          key={item.id}
          id={item.id}
          done={item.done}
          text={item.text}
          createdAt={item.createdAt}
          onDeleteItem={handleDeleteItem}
          onMarkItemAsDone={handleMarkItemAsDone}
        />
      );
    });

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([
      ...items,
      {
        id: Date.now(),
        text: formState.text,
        done: false,
        createdAt: Date.now(),
      },
    ]);
    setFormState({ ...formState, text: "" });
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo..."
          name="text"
          value={formState.text}
          onChange={handleChange}
        />
        <button type="submit">Add item</button>
      </form>
      <select onChange={handleSortChange} defaultValue={sort}>
        <option value="createdAtAsc">Created at (Ascending)</option>
        <option value="createdAtDesc">Created at (Descending)</option>
      </select>
      {itemComponents}
    </div>
  );
}

export default App;
