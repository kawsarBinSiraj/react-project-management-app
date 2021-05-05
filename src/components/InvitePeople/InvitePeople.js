import React from 'react'
import './InvitePeople.scss'
import user from '../../assets/images/user.png'

const InvitePeople = () => {
    return (
        <>
            <div className="InvitePeople d-flex align-items-center justify-content-between" style={{ marginBottom: '50px' }}>
                <div className="left-part d-flex align-items-center">
                    <div className="InvitePeople-list d-flex align-items-center">
                        <img src={user} alt="img" className="img-fluid" />
                        <img src={user} alt="img" className="img-fluid" />
                        <img src={user} alt="img" className="img-fluid" />
                    </div>
                    <button type="button" className="btn btn-InvitePeople">
                        <svg style={{marginRight : '6px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00f" class="bi bi-person-plus" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                        </svg>
                        Invite People
                    </button>
                </div>
                <div className="right-part">
                    <ul className="d-flex align-items-center list-unstyled">
                        <li style={{ marginRight: '20px' }}> <span style={{ color: '#00f' }}> &#8226; &nbsp;</span> Important</li>
                        <li style={{ marginRight: '20px' }}> <span style={{ color: '#0f0' }}> &#8226; &nbsp;</span> Irrelevant</li>
                        <li> <span style={{ color: '#f00' }}> &#8226; &nbsp;</span> Default</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default InvitePeople
