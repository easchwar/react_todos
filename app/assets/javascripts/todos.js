var Todos = function Todos(callback) {
  this.changed = callback.bind(null, this);
  this._todos = [];
};

Todos.prototype.fetch = function() {
  $.ajax({
    url: "/todos",
    method: "get",
    success: function(data, textStatus, ajax) {
      this._todos = data;
      this.changed();
    }.bind(this)
  });
};

Todos.prototype.create = function(attrs) {
  $.ajax({
    url: "/todos/",
    method: "post",
    data: {
      todo: attrs
    },
    success: function(data, textStatus, ajax) {
      this._todos.push(data);
      this.changed();
    }.bind(this)
  });
};

Todos.prototype.destroy = function(todo) {
  $.ajax({
    url: "/todos/" + todo.id,
    method: "delete",
    success: function(data, textStatus, ajax) {
      var idx = this._todos.indexOf(todo);
      this._todos.splice(idx, 1);
      this.changed();
    }.bind(this)
  });
};

Todos.prototype.toggleDone = function(todo) {
  $.ajax({
    url: "/todos/" + todo.id,
    method: "patch",
    data: {
      todo: {
        done: !todo.done
      }
    },
    success: function(data, textStatus, ajax) {
      todo.done = !todo.done;
      this.changed();
    }.bind(this)
  });
};

Todos.prototype.all = function() {
  return this._todos;
};

