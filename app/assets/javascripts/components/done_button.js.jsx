var DoneButton = React.createClass({
  onClick: function(event) {
    this.props.onClick();
  },

  render: function() {
    return(
      <button onClick={this.onClick}>
        {this.props.done ? "undo" : "done"}
      </button>
    );
  }
});
