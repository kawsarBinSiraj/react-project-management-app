import React from 'react'
import Todo from '../components/Todo/Todo'
import InvitePeople from '../components/InvitePeople/InvitePeople'

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="container-fluid">
                    <InvitePeople />
                    <Todo />
                </div>
            </div>
        </>
    )
}

export default Home
