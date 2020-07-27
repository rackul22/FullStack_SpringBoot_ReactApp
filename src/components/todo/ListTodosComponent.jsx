import React, { Component } from 'react';
import AuthenticationService from './AuthenticationService';
import { Route, Redirect } from 'react-router-dom';
import TodoDataService from '../../api/todo/TodoDataService.js';
import moment from 'moment';

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: null,
    };

    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.addTodoClicked = this.addTodoClicked.bind(this);
  }

  // lifecycle Method called immediately after the component is mounted
  componentDidMount() {
    console.log('componentDidMount');
    this.refreshTodos();
    console.log(this.state);
  }

  refreshTodos() {
    let userName = AuthenticationService.getLoggedInUsername();
    TodoDataService.retrieveAllTodos(userName).then((response) => {
      console.log(response);
      this.setState({
        todos: response.data,
      });
    });
  }

  // called when the another page/ component is calle
  componentWillMount() {
    // console.log('componentWillMount');
  }

  //based on this the component is updated
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate');
    return true;
  }

  deleteTodoClicked(id) {
    let userName = AuthenticationService.getLoggedInUsername();
    console.log(id, +' ' + userName);
    TodoDataService.deleteTodo(userName, id).then((response) => {
      this.setState({ message: `Delete of todo ${id} is Successful` });
      this.refreshTodos();
    });
  }

  addTodoClicked() {
    this.props.history.push(`/todos/-1`);
  }
  updateTodoClicked(id) {
    console.log('Update' + id);
    // /todos/${id}
    this.props.history.push(`/todos/${id}`);

    // let userName = AuthenticationService.getLoggedInUsername();
    // console.log(id, +' ' + userName);
    // TodoDataService.deleteTodo(userName, id).then((response) =>
    //   this.setState({ message: `Delete of todo ${id} is Successful` })
    // );
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        {this.state.message && (
          <div className='alert alert-success'>{this.state.message}</div>
        )}
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>Description</th>
                <th>IsCompleted?</th>
                <th>Target Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                  <td>
                    <button
                      className='btn btn-success'
                      onClick={() => this.updateTodoClicked(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='row'>
            <button className='btn btn-success' onClick={this.addTodoClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
