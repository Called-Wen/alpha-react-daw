import React, { Component } from "react";

class Exercise3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      list: [],
      editIndex: null,
      editedTodo: "",
    };
  }

  updateInput(value) {
    this.setState({
      userInput: value,
    });
  }

  addItem = () => {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),
        value: this.state.userInput,
      };

      const list = [...this.state.list];
      list.push(userInput);

      this.setState({
        list,
        userInput: "",
      });
    }
  };

  editItem = (index) => {
    const todos = [...this.state.list];
    const editedTodo = prompt("Edit the todo:");
    const parsedIndex = parseInt(index, 10);

    if (editedTodo !== null && editedTodo.trim() !== "" && !isNaN(parsedIndex)) {
      let updatedTodos = [...todos];
      if (updatedTodos[parsedIndex]) {
        updatedTodos[parsedIndex].value = editedTodo;
        this.setState({
          list: updatedTodos,
          editIndex: null,
          editedTodo: "",
        });
      }
    }
  };

  deleteItem = (id) => {
    const updatedList = this.state.list.filter((item) => item.id !== id);
    this.setState({ list: updatedList });
  };

  showEditModal = (index) => {
    this.setState({
      editIndex: index,
      editedTodo: this.state.list[index].value,
    });
  };

  hideEditModal = () => {
    this.setState({ editIndex: null, editedTodo: "" });
  };

  saveEdit = () => {
    if (this.state.editedTodo.trim() !== "") {
      let updatedTodos = [...this.state.list];
      updatedTodos[this.state.editIndex].value = this.state.editedTodo;
      this.setState({
        list: updatedTodos,
        editIndex: null,
        editedTodo: "",
      });
    }
  };

  render() {
    return (
      <div className="container mt-3">
        <h1>Exercício nr3</h1>

        <div className="container mt-3">
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ fontSize: "3rem", fontWeight: "bolder" }}
          >
            Lista de Tarefas
          </div>

          <hr />

          <div className="row">
            <div className="col-md-5 offset-md-4">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="adicionar tarefa . . . "
                  aria-label="add something"
                  aria-describedby="basic-addon2"
                  value={this.state.userInput}
                  onChange={(e) => this.updateInput(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-primary mt-2 ms-3 py-2"
                    type="button"
                    onClick={this.addItem}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-5 offset-md-4">
              <ul className="list-group">
                {this.state.list.map((item, index) => (
                  <div key={item.id}>
                    <li className="list-group-item list-group-item-dark d-flex justify-content-between">
                      <p>{item.value}</p>
                      <span>
                        <button
                          className="btn btn-success px-2"
                          type="button"
                          onClick={() => this.showEditModal(index)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-danger ms-1"
                          type="button"
                          onClick={() => this.deleteItem(item.id)}
                        >
                          Excluir
                        </button>
                      </span>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {this.state.editIndex !== null && (
          <div
            className="modal"
            style={{
              display: "block",
              backgroundColor: "rgba(0,0,0,0.5)",
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              overflow: "auto",
            }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Edit Task</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={this.hideEditModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    value={this.state.editedTodo}
                    onChange={(e) =>
                      this.setState({ editedTodo: e.target.value })
                    }
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={this.hideEditModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={this.saveEdit}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Exercise3;
