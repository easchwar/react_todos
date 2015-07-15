var TodoList = React.createClass({
  componentDidMount: function() {
    this.props.todos.fetch();
  },

  createTodo: function(data) {
    this.props.todos.create(data);
  },

  destroyTodo: function(todo) {
    this.props.todos.destroy(todo); 
  },

  toggleDone: function(todo) {
    this.props.todos.toggleDone(todo);
  },

  render: function() {
    return(
      <div>
        {
          this.props.todos.all().map(function(todo) {
            return <TodoListItem 
              key={todo.id} 
              todo={todo}
              destroy={this.destroyTodo}
              toggleDone={this.toggleDone}/>
          }.bind(this))
        }
        <TodoForm onSubmit={this.createTodo}/>
      </div>
    )
  }
});

var globalRender = function globalRender(todos) {
  React.render(
    <TodoList todos={todos}/>,
    document.body
  )
};

