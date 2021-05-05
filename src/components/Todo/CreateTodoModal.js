import React, { useState, useEffect } from 'react'
import Modal from 'react-modal';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useDispatch } from 'react-redux';
const _ = require('lodash');

const CreateTodoModal = ({ open, close, editTodoData }) => {

    /** Making perform local State*/
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [projectType, setProjectType] = useState('important');
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode] = useState(null);

    const [users, setUsers] = useState([]);
    const [totalUsers, setTotalUsers] = useState(null);
    const [assignTo, setAssignTo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [timer, setTimer] = useState(null);

    /**
     * Making perform addTodo func
     *
     * @action - dispatch to redux store
     */
    const addTodo = () => {
        dispatch({
            type: 'ADD_TODO',
            payload: {
                id: Date.now(),
                title,
                description,
                projectType,
                assignTo
            }
        });
    }

    /**
     * Making perform updateTodo func
     *
     * @param {number} id
     * @action - dispatch to redux store
     */
    const updateTodo = (id) => {
        dispatch({
            type: 'UPDATE_TODO',
            payload: {
                id: id,
                title,
                description,
                projectType,
                assignTo
            }
        });
    }

    /**
     * form submit
     *
     * @param {js event} e
     * @action - todo add/update and close modal
     */
    const submit = (e) => {
        e.preventDefault();
        if (!_.size(title) || !_.size(description) || !_.size(projectType) || _.isEmpty(assignTo)) {
            return alert('All form field are required !');
        }
        isEditMode ? updateTodo(editTodoData.id) : addTodo();
        close();
    }


    /**
     * Making API request to github to find users
     *
     * @param - No
     * @action - API Request
     */
    const findUsers = () => {
        clearTimeout(timer);
        setTimer(null);
        setTimer(
            setTimeout(() => {
                setLoading(true);
                fetch(`https://api.github.com/search/users?q=${search}`)
                    .then((res) => res.json())
                    .then((res) => {
                        setTotalUsers(res.total_count);
                        setUsers(res.items);
                        setLoading(false);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }, 1000)
        );
    };



    /**
     * setAssignToArray
     *
     * @param - {obj} user
     * @param - {js event} e
     * @action - users set who has assigned to task 
     */
    const setAssignToArray = (user, e) => {
        if (e.target.checked === true) {
            let assignToLocal = assignTo;
            assignToLocal.push(user);
            setAssignTo(assignToLocal);
            console.log(user, e.target.checked);
            e.target.closest('.placeholder-item').classList.add('userAdded');
        }

        if (e.target.checked === false) {
            setAssignTo(assignTo.filter((item) => item.id !== user.id));
            e.target.closest('.placeholder-item').classList.remove('userAdded');
        }
    }

    /**
     * removeAssignTo
     *
     * @param - {number} id
     * @action - filter and users set who has assigned to task 
     */
    const removeAssignTo = (id) => {
        setAssignTo(assignTo.filter((item) => item.id !== id));
    }


    /** useEffect didMount/didUpdate */
    useEffect(() => {
        if (!search) {
            return setUsers([]);
        }

        // findUsers by FETCH API
        findUsers();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);


    /** useEffect didMount/didUpdate */
    useEffect(() => {
        if (_.isEmpty(editTodoData) || _.isNull(editTodoData)) {
            setIsEditMode(false);
        } else {
            setIsEditMode(true);
            let { title, description, projectType, assignTo } = editTodoData
            setTitle(title);
            setDescription(description);
            setProjectType(projectType);
            setAssignTo(assignTo);
        }
    }, [editTodoData])



    return (
        <>
            <Modal isOpen={open} onRequestClose={close} ariaHideApp={false}>
                <div className="modalHeader" style={{ textAlign: 'right' }}>
                    <button onClick={close} className="btn">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.3242 15.4121C17.3828 15.4707 17.4219 15.5391 17.4414 15.6172C17.4805 15.6953 17.5 15.7832 17.5 15.8809C17.5 15.959 17.4805 16.0371 17.4414 16.1152C17.4219 16.1934 17.3828 16.2617 17.3242 16.3203L16.4453 17.1992C16.3867 17.2578 16.3184 17.3066 16.2402 17.3457C16.1621 17.3652 16.084 17.375 16.0059 17.375C15.9082 17.375 15.8203 17.3652 15.7422 17.3457C15.6641 17.3066 15.5957 17.2578 15.5371 17.1992L10 11.6328L4.46289 17.1992C4.4043 17.2578 4.33594 17.3066 4.25781 17.3457C4.17969 17.3652 4.0918 17.375 3.99414 17.375C3.91602 17.375 3.83789 17.3652 3.75977 17.3457C3.68164 17.3066 3.61328 17.2578 3.55469 17.1992L2.67578 16.3203C2.61719 16.2617 2.56836 16.1934 2.5293 16.1152C2.50977 16.0371 2.5 15.959 2.5 15.8809C2.5 15.7832 2.50977 15.6953 2.5293 15.6172C2.56836 15.5391 2.61719 15.4707 2.67578 15.4121L8.24219 9.875L2.67578 4.33789C2.61719 4.2793 2.56836 4.21094 2.5293 4.13281C2.50977 4.05469 2.5 3.9668 2.5 3.86914C2.5 3.79102 2.50977 3.71289 2.5293 3.63477C2.56836 3.55664 2.61719 3.48828 2.67578 3.42969L3.55469 2.55078C3.61328 2.49219 3.68164 2.45312 3.75977 2.43359C3.83789 2.39453 3.91602 2.375 3.99414 2.375C4.0918 2.375 4.17969 2.39453 4.25781 2.43359C4.33594 2.45312 4.4043 2.49219 4.46289 2.55078L10 8.11719L15.5371 2.55078C15.5957 2.49219 15.6641 2.45312 15.7422 2.43359C15.8203 2.39453 15.9082 2.375 16.0059 2.375C16.084 2.375 16.1621 2.39453 16.2402 2.43359C16.3184 2.45312 16.3867 2.49219 16.4453 2.55078L17.3242 3.42969C17.3828 3.48828 17.4219 3.55664 17.4414 3.63477C17.4805 3.71289 17.5 3.79102 17.5 3.86914C17.5 3.9668 17.4805 4.05469 17.4414 4.13281C17.4219 4.21094 17.3828 4.2793 17.3242 4.33789L11.7578 9.875L17.3242 15.4121Z" fill="#A8ABBD" />
                        </svg>
                    </button>
                </div>
                <div className="modalBody create-todo-modal">
                    <h3 className="title">Create New Task</h3>
                    <Tabs className="nav-pills">
                        <TabList>
                            <Tab>General Info</Tab>
                            <Tab>Assign To</Tab>
                        </TabList>

                        <form className="todo-add-form" onSubmit={(e) => { submit(e) }}>
                            <TabPanel>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label className="form-label" htmlFor="#">Title</label>
                                    <input onChange={e => setTitle(e.target.value)} value={title} type="text" name='title' className="form-control" placeholder="title" />
                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label className="form-label" htmlFor="#">Description</label>
                                    <textarea onChange={e => setDescription(e.target.value)} value={description} name="description" className="form-control" cols="30" rows="5" placeholder="description"></textarea>
                                </div>
                                <div className="form-group" style={{ marginBottom: '15px' }}>
                                    <label className="form-label" htmlFor="#">Project Type</label>
                                    <select defaultValue={projectType} onChange={e => setProjectType(e.target.value)} className="form-control" name="projectType">
                                        <option value="important">Important</option>
                                        <option value="normal">Normal</option>
                                        <option value="high">High</option>
                                    </select>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="searchEmployees form-group" style={{ marginBottom: '15px' }}>
                                    <input id="search-control" onChange={(e) => setSearch(e.target.value)} value={search} type="search" name='searchEmployees' className="form-control" placeholder="Search Employees" autoComplete={'off'} />

                                    {
                                        loading ?
                                            <div className="if-loading">
                                                <p className="placeholder-item">Loading...</p>
                                            </div>
                                            : !_.isNull(totalUsers) && totalUsers <= 0 ?
                                                <div className="if-no-users">
                                                    <p className="placeholder-item">There is no user by this search keywords !!</p>
                                                </div> : null
                                    }

                                    {
                                        !_.isEmpty(users) &&
                                        <div className="searchEmployees-placeholder placeholder-absolute">
                                            {
                                                users?.map((user) => {
                                                    return (
                                                        <label htmlFor={user.id} onClick={(e) => { setAssignToArray(user, e) }} key={user.id} className="placeholder-item">
                                                            <input type="checkbox" id={user.id} />
                                                            <img src={user.avatar_url} alt="img" className="img-fluid" />
                                                            <p>{user.login}</p>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00f" className="bi bi-check2-all" viewBox="0 0 16 16">
                                                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                                                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                                                            </svg>
                                                        </label>
                                                    )
                                                })
                                            }
                                        </div>
                                    }
                                    <ul className="searchEmployees-placeholder">
                                        {
                                            assignTo?.map((to, index) => {
                                                return (
                                                    <li key={index} className="placeholder-item">
                                                        <img src={to.avatar_url} alt="img" className="img-fluid" />
                                                        <p>{to.login}</p>
                                                        <button type="button" onClick={() => { removeAssignTo(to.id) }} className="btn">
                                                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M9.39453 8.44727C9.42969 8.48242 9.45312 8.52344 9.46484 8.57031C9.48828 8.61719 9.5 8.66992 9.5 8.72852C9.5 8.77539 9.48828 8.82227 9.46484 8.86914C9.45312 8.91602 9.42969 8.95703 9.39453 8.99219L8.86719 9.51953C8.83203 9.55469 8.79102 9.58398 8.74414 9.60742C8.69727 9.61914 8.65039 9.625 8.60352 9.625C8.54492 9.625 8.49219 9.61914 8.44531 9.60742C8.39844 9.58398 8.35742 9.55469 8.32227 9.51953L5 6.17969L1.67773 9.51953C1.64258 9.55469 1.60156 9.58398 1.55469 9.60742C1.50781 9.61914 1.45508 9.625 1.39648 9.625C1.34961 9.625 1.30273 9.61914 1.25586 9.60742C1.20898 9.58398 1.16797 9.55469 1.13281 9.51953L0.605469 8.99219C0.570312 8.95703 0.541016 8.91602 0.517578 8.86914C0.505859 8.82227 0.5 8.77539 0.5 8.72852C0.5 8.66992 0.505859 8.61719 0.517578 8.57031C0.541016 8.52344 0.570312 8.48242 0.605469 8.44727L3.94531 5.125L0.605469 1.80273C0.570312 1.76758 0.541016 1.72656 0.517578 1.67969C0.505859 1.63281 0.5 1.58008 0.5 1.52148C0.5 1.47461 0.505859 1.42773 0.517578 1.38086C0.541016 1.33398 0.570312 1.29297 0.605469 1.25781L1.13281 0.730469C1.16797 0.695312 1.20898 0.671875 1.25586 0.660156C1.30273 0.636719 1.34961 0.625 1.39648 0.625C1.45508 0.625 1.50781 0.636719 1.55469 0.660156C1.60156 0.671875 1.64258 0.695312 1.67773 0.730469L5 4.07031L8.32227 0.730469C8.35742 0.695312 8.39844 0.671875 8.44531 0.660156C8.49219 0.636719 8.54492 0.625 8.60352 0.625C8.65039 0.625 8.69727 0.636719 8.74414 0.660156C8.79102 0.671875 8.83203 0.695312 8.86719 0.730469L9.39453 1.25781C9.42969 1.29297 9.45312 1.33398 9.46484 1.38086C9.48828 1.42773 9.5 1.47461 9.5 1.52148C9.5 1.58008 9.48828 1.63281 9.46484 1.67969C9.45312 1.72656 9.42969 1.76758 9.39453 1.80273L6.05469 5.125L9.39453 8.44727Z" fill="#A8ABBD" />
                                                            </svg>
                                                        </button>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </TabPanel>
                            <button type="submit" className="btn btn-todo-submit">
                                {isEditMode ? 'Update' : 'Save'}
                            </button>
                        </form>
                    </Tabs>
                </div>
            </Modal>
        </>
    )
}

export default CreateTodoModal
