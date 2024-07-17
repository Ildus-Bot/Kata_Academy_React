import React from 'react';

export default class NewTaskForm extends React.Component {
  state = {
    value: '',
  };

  changeValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  addTask = (e) => {
    if (e.key === 'Enter') {
      this.props.addTaskItem(this.state.value);

      this.setState({
        value: '',
      });
    }
  };

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={this.state.value}
        onChange={this.changeValue}
        onKeyPress={this.addTask}
        autoFocus
      />
    );
  }
}

NewTaskForm.defaultProps = {
  addTaskItem: () => {},
};
