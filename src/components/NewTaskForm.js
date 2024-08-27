import React from 'react';

export default class NewTaskForm extends React.Component {
  state = {
    text: '',
    minute: '',
    second: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let { minute, second, text } = this.state;

    if (text === '') {
      return;
    }

    if (minute === '') {
      minute = 0;
    }

    if (second === '') {
      second = 0;
    }

    if (!this.isNumber(minute)) {
      return;
    }

    if (!this.isNumber(second)) {
      return;
    }

    if (second > 60) {
      return;
    }

    if (minute > 9999) {
      return;
    }

    this.props.addTaskItem(this.state.text, minute, second);
  };

  isNumber = (num) => {
    console.log(num, Number(num) === 'number', !isNaN(num));
    return typeof Number(num) === 'number' && !isNaN(num);
  };

  render() {
    const { text, minute, second } = this.state;

    return (
      <form className="new-todo-form" onSubmit={this.handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
          autoFocus
        />
        <input
          className="new-todo-form__timer"
          value={minute}
          onChange={(e) => {
            this.setState({ minute: e.target.value });
          }}
          placeholder="Min"
        />
        <input
          className="new-todo-form__timer"
          value={second}
          onChange={(e) => {
            this.setState({ second: e.target.value });
          }}
          placeholder="Sec"
        />
        <input hidden type="submit" />
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  addTaskItem: () => {},
};
