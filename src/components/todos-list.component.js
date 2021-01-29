import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Todo = props => {

    const buttonDeleteStyle = {
        border: 0,
        background: 'transparent',
        color: '#007bff'
    };

    const onClickDeleteTodo = (event) => {
        console.log(`delete ${props.todo._id}`);
    };

    return (
        <tr>
            <td>{props.todo.description}</td>
            <td>{props.todo.responsible}</td>
            <td>{props.todo.priority}</td>
            <td>{props.todo.completed ? 'Yes' : 'No'}</td>
            <td>
                <Link to={"/edit/" + props.todo._id}> Edit </Link>|
                <button style={buttonDeleteStyle} onClick={onClickDeleteTodo}> Delete </button>
            </td>
        </tr>
    )
};

export default class TodosList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/todos/')
            .then(response => {
                this.setState({todos: response.data});
            })
            .catch((error) => console.log(error));
    }

    todoList() {
        return this.state.todos.map((currentTodo, i) => {
            return <Todo todo={currentTodo} key={i} />
        });
    }

    render() {
        return (
            <div>
                <h3>Todos list</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th>Completed</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        );
    }
}