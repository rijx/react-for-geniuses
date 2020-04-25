require("./TodoListItem.scss");

function TodoListItem({ text, onDelete }) {
  return (
    <div className="TodoListItem">
      <div className="text">{text}</div>
      {onDelete ? (
        <button x ype="button" onClick={onDelete}>
          x
        </button>
      ) : null}
    </div>
  );
}

module.exports = TodoListItem;
