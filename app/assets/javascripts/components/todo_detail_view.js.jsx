var TodoDetailView = React.createClass({
  getInitialState: function() {
    return {
      shown: false
    }
  },

  toggleDone: function() {
    this.props.toggleDone(this.props.todo);
  },

  render: function() {
    return(
      <div>
        <DoneButton done={this.props.todo.done} onClick={this.toggleDone}/>
        <span>{this.props.todo.body}</span>
      </div>
    );
  }
});
