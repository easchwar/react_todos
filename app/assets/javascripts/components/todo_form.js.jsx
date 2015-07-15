var TodoForm = React.createClass({
  getInitialState: function() {
    return {
      body: "",
      title: ""
    };
  },

  onSubmit: function(event) {
    event.preventDefault();
    this.setState({ 
      body: "",
      title: ""
    });
    this.props.onSubmit(this.state);
  },

  updateTitle: function(event) {
    this.setState({ title: event.target.value });
  },

  updateBody: function(event) {
    this.setState({ body: event.target.value });
  },

  render: function() {
    return(
      <form className="todo-form" onSubmit={this.onSubmit}>
        <input type="text" onChange={this.updateTitle} value={this.state.title}/>
        <br/>
        <textarea onChange={this.updateBody} value={this.state.body}/>
        <input type="submit" value="Create Todo"/>
      </form>
    )
  }
});
