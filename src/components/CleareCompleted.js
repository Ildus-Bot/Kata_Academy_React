import React from 'react';

function CleareCompleted(props) {
  return (
    <button className="clear-completed" onClick={props.cleareCompletedTasks}>
      Clear completed
    </button>
  );
}

export default CleareCompleted;
