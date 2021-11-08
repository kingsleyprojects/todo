const FilterButton = (props) => {
  return (
    <div>
      <div className="todo-footer">
        <div>
          <span>{props.taskCount} items left</span>
        </div>
        <div className="status-wrapper">
          <ul onClick={props.statusHandler} id="status">
            <li id="active">All</li>
            <li>Active</li>
            <li>Completed</li>
          </ul>
        </div>
        <div>
          <span onClick={props.clearCompletedTasks}>Clear Completed</span>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
