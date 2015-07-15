var TodoListItem = React.createClass({
  getInitialState: function() {
    return {
      expanded: false
    };
  },

  destroy: function() {
    this.props.destroy(this.props.todo);
  },

  render: function() {
    return(
      <li>
        <TodoDetailView todo={this.props.todo}/>
        {this.props.todo.title}
        <button onClick={this.destroy}>goodbye</button>
      </li>
    )
  }
});
