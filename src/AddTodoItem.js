const { useState } = require("react");

require("./AddTodoItem.scss");

function AddTodoItem({ onAdd }) {
  const [text, setText] = useState();

  return (
    <form
      className="AddTodoItem"
      onSubmit={(e) => {
        e.preventDefault();

        onAdd({ text });

        setText();
      }}
    >
      <input
        placeholder="What are we doing today?"
        value={text || ""}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <button>+</button>
    </form>
  );
}

module.exports = AddTodoItem;
