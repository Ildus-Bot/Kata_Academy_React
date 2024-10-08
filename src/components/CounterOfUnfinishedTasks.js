import React from 'react';

function CounterOfUnfinishedTasks(props) {
  return <span className="todo-count">{`${props.countOfUnfinishedTasks()} items left`}</span>;
}

export default CounterOfUnfinishedTasks;
