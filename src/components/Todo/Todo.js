import React, { useState } from 'react'
import './Todo.scss'
import user from '../../assets/images/user.png'
import CreateTodoModal from './CreateTodoModal'
import { useSelector, useDispatch } from 'react-redux';
const _ = require('lodash');

const Todo = () => {

    /** Making perform local State*/
    const [modalIsOpen, setIsOpen] = useState(false);
    const [editTodoData, setEditTodoData] = useState(null);
    const dispatch = useDispatch();
    const todos = useSelector(state => {
        if (_.isEmpty(state.todos)) {
            return null
        }
        return state.todos
    });

    /** Making perform to openModal - func */
    const openModal = () => {
        setIsOpen(true);
    }

    /** Making perform to closeModal - func */
    const closeModal = () => {
        setIsOpen(false);
        setEditTodoData(null)
    }

    /**
     * Making perform deleteTodo func
     *
     * @param - {number} id
     * @action - dispatch to redux store
     */
    const deleteTodo = (id) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        });
    }


    /**
     * Making perform editTodo func
     *
     * @param - {obj} todo
     * @action - dispatch to redux store
     */
    const editTodo = (todo) => {
        setEditTodoData(todo);
        openModal();
    }

    return (
        <>
            { modalIsOpen ? <CreateTodoModal open={modalIsOpen} close={closeModal} editTodoData={editTodoData} /> : null}
            <div className="todo">
                <div className="todo-task-progress">
                    <div className="task-progress-header d-flex align-items-center justify-content-between">
                        <h3 className="title">To-do ({!_.isEmpty(todos) ? todos.length : '0'})</h3>
                        <button onClick={openModal} className="btn btn-new-task" type="button">
                            + New Task
                        </button>
                    </div>
                    <ul className="task-lists">
                        {
                            !_.isEmpty(todos) ?
                                todos.map((todo) => {
                                    return (
                                        <li key={todo.id} className="task-list">
                                            <h4 className="task-title">
                                                <span style={{ color: '#00f' }}> &#8226; &nbsp;</span>
                                                {todo.title}
                                            </h4>
                                            <p className="task-desc">
                                                {todo.description}
                                            </p>
                                            <div className="task-footer d-flex align-items-center justify-content-between">
                                                <div className="assignTo-list">
                                                    {
                                                        todo.assignTo?.map((at, index) => {
                                                            return (
                                                                <img key={index + 1} src={at.avatar_url} alt="img" className="img-fluid" />
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="button-group">
                                                    <button className="btn" type="button">
                                                        <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M8.75 2.5C9.16421 2.5 9.5 2.16421 9.5 1.75C9.5 1.33579 9.16421 1 8.75 1C8.33579 1 8 1.33579 8 1.75C8 2.16421 8.33579 2.5 8.75 2.5Z" stroke="#808191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M15.75 2.5C16.1642 2.5 16.5 2.16421 16.5 1.75C16.5 1.33579 16.1642 1 15.75 1C15.3358 1 15 1.33579 15 1.75C15 2.16421 15.3358 2.5 15.75 2.5Z" stroke="#808191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M1.75 2.5C2.16421 2.5 2.5 2.16421 2.5 1.75C2.5 1.33579 2.16421 1 1.75 1C1.33579 1 1 1.33579 1 1.75C1 2.16421 1.33579 2.5 1.75 2.5Z" stroke="#808191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <div className="task-action-dropdown">
                                                            <span onClick={() => { editTodo(todo) }} className="btn-action"> Edit</span>
                                                            <span onClick={() => { deleteTodo(todo.id) }} className="btn-action"> Delete </span>
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                                : <p>Todos Length is Empty !</p>
                        }
                    </ul>
                </div>
                <div className="todo-task-progress">
                    <div className="task-progress-header d-flex align-items-center justify-content-between">
                        <h3 className="title">In Progress (1)</h3>
                    </div>
                    <ul className="task-lists">
                        <li className="task-list">
                            <h4 className="task-title">
                                <span style={{ color: '#f0f' }}> &#8226; &nbsp;</span>
                                Design
                            </h4>
                            <p className="task-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consectetur!
                            </p>
                            <div className="task-footer d-flex align-items-center justify-content-between">
                                <img src={user} alt="img" className="img-fluid" />
                                <button className="btn" type="button">
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 2.5C9.16421 2.5 9.5 2.16421 9.5 1.75C9.5 1.33579 9.16421 1 8.75 1C8.33579 1 8 1.33579 8 1.75C8 2.16421 8.33579 2.5 8.75 2.5Z" stroke="#808191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.75 2.5C16.1642 2.5 16.5 2.16421 16.5 1.75C16.5 1.33579 16.1642 1 15.75 1C15.3358 1 15 1.33579 15 1.75C15 2.16421 15.3358 2.5 15.75 2.5Z" stroke="#808191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.75 2.5C2.16421 2.5 2.5 2.16421 2.5 1.75C2.5 1.33579 2.16421 1 1.75 1C1.33579 1 1 1.33579 1 1.75C1 2.16421 1.33579 2.5 1.75 2.5Z" stroke="#808191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="task-action-dropdown">
                                        <span className="btn-action"> Edit</span>
                                        <span className="btn-action"> Delete </span>
                                    </div>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="todo-task-progress">
                    <div className="task-progress-header d-flex align-items-center justify-content-between">
                        <h3 className="title">Done (1)</h3>
                    </div>
                    <ul className="task-lists">
                        <li className="task-list">
                            <h4 className="task-title">
                                <span style={{ color: '#0f0' }}> &#8226; &nbsp;</span>
                                Design
                            </h4>
                            <p className="task-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consectetur!
                            </p>
                            <div className="task-footer d-flex align-items-center justify-content-between">
                                <img src={user} alt="img" className="img-fluid" />
                                <button className="btn" type="button">
                                    <svg width="18" height="4" viewBox="0 0 18 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.75 2.5C9.16421 2.5 9.5 2.16421 9.5 1.75C9.5 1.33579 9.16421 1 8.75 1C8.33579 1 8 1.33579 8 1.75C8 2.16421 8.33579 2.5 8.75 2.5Z" stroke="#808191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.75 2.5C16.1642 2.5 16.5 2.16421 16.5 1.75C16.5 1.33579 16.1642 1 15.75 1C15.3358 1 15 1.33579 15 1.75C15 2.16421 15.3358 2.5 15.75 2.5Z" stroke="#808191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.75 2.5C2.16421 2.5 2.5 2.16421 2.5 1.75C2.5 1.33579 2.16421 1 1.75 1C1.33579 1 1 1.33579 1 1.75C1 2.16421 1.33579 2.5 1.75 2.5Z" stroke="#808191" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="task-action-dropdown">
                                        <span className="btn-action"> Edit</span>
                                        <span className="btn-action"> Delete </span>
                                    </div>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Todo
