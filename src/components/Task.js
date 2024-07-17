import React from 'react';
import { formatDistanceToNow } from 'date-fns';

export default class Task extends React.Component {
  static defaultProps = {
    onChangeTaskItem: () => {},
    onDeleteTaskItem: () => {},
  };

  static propTypes = {
    todoList: (props, propName, componentName) => {
      const valueProps = props[propName];

      if (typeof valueProps === 'object') {
        return null;
      }

      return new TypeError(`${componentName} must be object`);
    },
  };

  drawingAccess = this.props.todoList.className === 'editing' ? true : false;

  state = {
    value: this.props.todoList.description,
  };

  onLabelClick = () => {
    this.props.onChangeTaskItem(this.props.todoList.id);
  };

  onLabelClickDestroy = () => {
    this.props.onDeleteTaskItem(this.props.todoList.id);
  };

  changeRenderingData = (isEditing = true) => {
    this.drawingAccess = !this.drawingAccess;
    this.props.onChangeTaskItem(this.props.todoList.id, isEditing);
  };

  changeDescription = (e) => {
    if (e.key === 'Enter') {
      this.props.onChangeTaskItem(this.props.todoList.id, true, this.state.value);
      this.setState({
        value: '',
      });

      this.changeRenderingData(false);
    }
  };

  changeValue = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const createdAgo = `created ${formatDistanceToNow(this.props.todoList.dateOfCreation)} ago`;
    const { todoList } = this.props;

    return (
      <div>
        <div className="view">
          <input
            className="toggle"
            onClick={this.onLabelClick}
            checked={todoList.className === 'completed' ? true : false}
            type="checkbox"
          />
          <label>
            <span className="description" onClick={this.onLabelClick}>
              {todoList.description}
            </span>
            <span className="created">{createdAgo}</span>
          </label>
          <button className="icon icon-edit" onClick={this.changeRenderingData}></button>
          <button className="icon icon-destroy" onClick={this.onLabelClickDestroy}></button>
        </div>
        {this.drawingAccess && (
          <input
            type="text"
            className="edit"
            value={this.state.value}
            onChange={this.changeValue}
            onKeyPress={this.changeDescription}
          />
        )}
      </div>
    );
  }
}
