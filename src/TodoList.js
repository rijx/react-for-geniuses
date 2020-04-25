const TodoListItem = require("./TodoListItem");

function TodoList({ items, onChange }) {
  return (
    <div>
      {(items || []).map((x, i) => (
        <TodoListItem
          key={i}
          {...x}
          onDelete={() => {
            const newItems = items.slice();

            newItems.splice(i, 1);

            onChange(newItems);
          }}
        />
      ))}
    </div>
  );
}

module.exports = TodoList;
