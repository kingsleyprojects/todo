const MobileFilterButton = (props) => {
  return (
    <div className="todo-status">
      <ul onClick={props.statusHandler} id="status">
        <li id="active">All</li>
        <li>Active</li>
        <li>Completed</li>
      </ul>
    </div>
  );
};

export default MobileFilterButton;
