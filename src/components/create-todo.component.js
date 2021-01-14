import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: '',
            responsible: '',
            priority: '',
            completed: false
        };
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeTodoDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log(`Form submitted`);
        console.log(`Todo Description:  ${this.state.description}`);
        console.log(`Todo Responsible:  ${this.state.responsible}`);
        console.log(`Todo Priority:  ${this.state.priority}`);

        const newTodo = {
            description: this.state.description,
            responsible: this.state.responsible,
            priority: this.state.priority,
            completed: this.state.completed
        };

        // post data to server
        console.log(`${process.env.REACT_APP_SERVER_URL}:${process.env.REACT_APP_SERVER_PORT}/todos/add`);
        axios.post(`http://localhost:4000/todos/add`, newTodo)
            .then(response => console.log(response.data));

        this.setState({
            description: '',
            responsible: '',
            priority: '',
            completed: false
        });
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3> Create new Todo </h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeTodoDescription}
                                />    
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.responsible}
                                onChange={this.onChangeTodoResponsible}
                                />    
                    </div>
                    <div className="form-group">
                        <div className="formn-check form-check-inline">
                            <input  type="radio"
                                    className="form-check-input"
                                    name="priorityOptions"
                                    id="priorityLow"
                                    value="Low"
                                    checked={this.state.priority==='Low'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>    
                    </div>
                    <div className="form-group">
                        <div className="formn-check form-check-inline">
                            <input  type="radio"
                                    className="form-check-input"
                                    name="priorityOptions"
                                    id="priorityMedium"
                                    value="Medium"
                                    checked={this.state.priority==='Medium'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>    
                    </div>
                    <div className="form-group">
                        <div className="formn-check form-check-inline">
                            <input  type="radio"
                                    className="form-check-input"
                                    name="priorityOptions"
                                    id="priorityHigh"
                                    value="High"
                                    checked={this.state.priority==='High'}
                                    onChange={this.onChangeTodoPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>    
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        );
    }
}