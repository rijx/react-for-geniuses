const { useState } = require("react");

const AddTodoItem = require("./AddTodoItem");
const TodoList = require("./TodoList");

require("./App.scss");

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoList items={items} onChange={setItems} />
      <AddTodoItem onAdd={(x) => setItems(items.concat(x))} />
    </div>
  );
}

module.exports = App;
