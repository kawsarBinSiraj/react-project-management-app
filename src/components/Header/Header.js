import './Header.scss'
import user from '../../assets/images/user.png'

function Header() {
    return (
        <>
            <header className="header">
                <div className="container-fluid d-flex align-items-center">
                    <div className="header-left app-search">
                        <input type="text" className="search-control" placeholder="Search" />
                    </div>
                    <div className="header-right">
                        <div className="user-notification-panel">
                            <button className="btn btn-notification-bell" type="button">
                                <svg width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.00781 18.4922H9.99219C9.99219 19.0547 9.79688 19.5312 9.40625 19.9219C9.01562 20.3125 8.54688 20.5078 8 20.5078C7.45312 20.5078 6.98438 20.3125 6.59375 19.9219C6.20312 19.5312 6.00781 19.0547 6.00781 18.4922ZM15.7109 14.2031L14.8906 13.3828C14.6094 13.1172 14.3906 12.8047 14.2344 12.4453C14.0781 12.0703 14 11.6719 14 11.25V8.50781C14 7.82031 13.8906 7.17188 13.6719 6.5625C13.4688 5.95312 13.1719 5.39062 12.7812 4.875L12.8047 4.89844L11.8906 3.70312C11.625 3.32812 11.2812 3.03906 10.8594 2.83594C10.4375 2.61719 9.98438 2.50781 9.5 2.50781H9.00781V1.00781C9.00781 0.867188 8.95312 0.75 8.84375 0.65625C8.75 0.546875 8.63281 0.492188 8.49219 0.492188H7.50781C7.36719 0.492188 7.24219 0.546875 7.13281 0.65625C7.03906 0.75 6.99219 0.867188 6.99219 1.00781V2.50781H6.5C6.01562 2.50781 5.5625 2.61719 5.14062 2.83594C4.71875 3.03906 4.375 3.32812 4.10938 3.70312L3.19531 4.89844C2.82031 5.39844 2.52344 5.95312 2.30469 6.5625C2.10156 7.17188 2 7.82031 2 8.50781V11.25C2 11.6719 1.92188 12.0703 1.76562 12.4453C1.60938 12.8047 1.39062 13.1172 1.10938 13.3828L0.289062 14.2031C0.195312 14.2969 0.125 14.4062 0.078125 14.5312C0.03125 14.6406 0.0078125 14.7656 0.0078125 14.9062V15.4922C0.0078125 15.7734 0.101562 16.0156 0.289062 16.2188C0.492188 16.4062 0.726562 16.5 0.992188 16.5H15.0078C15.2734 16.5 15.5 16.4062 15.6875 16.2188C15.8906 16.0156 15.9922 15.7734 15.9922 15.4922V14.9062C15.9922 14.7656 15.9688 14.6406 15.9219 14.5312C15.875 14.4062 15.8047 14.2969 15.7109 14.2031Z" fill="#808191" />
                                </svg>
                                <span className="badge">3</span>
                            </button>
                            <button className="btn-current-user btn d-flex align-items-center" type="button">
                                <img src={user} alt="img" className="user-img img-fluid" style={{ marginRight: '5px' }} />
                                <p className="user-name">Kawsar Bin Siraj</p>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
