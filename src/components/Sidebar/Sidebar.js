
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Sidebar.scss'

function Sidebar() {

    // isDropdownMenu
    const isDropdownMenu = (e) => {
        e.preventDefault();
        setTimeout(() => {
            if (e.target.closest('.dropdown')) {
                if (e.target.closest('.dropdown').querySelector('.nav-link').classList.contains("active")) {
                    e.target.closest('.dropdown').classList.add('show');
                }
            } else {
                document.querySelector('.dropdown').classList.remove('show');
            }
        }, 50);
    }

    return (
        <>
            <aside className="sidebar-navigation">
                <div className="navbar">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={(e) => { isDropdownMenu(e) }}>
                            <NavLink className="nav-link" exact to="/" activeClassName={'active'}>
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.15722 19.7714V16.7047C8.1572 15.9246 8.79312 15.2908 9.58101 15.2856H12.4671C13.2587 15.2856 13.9005 15.9209 13.9005 16.7047V16.7047V19.7809C13.9003 20.4432 14.4343 20.9845 15.103 21H17.0271C18.9451 21 20.5 19.4607 20.5 17.5618V17.5618V8.83784C20.4898 8.09083 20.1355 7.38935 19.538 6.93303L12.9577 1.6853C11.8049 0.771566 10.1662 0.771566 9.01342 1.6853L2.46203 6.94256C1.86226 7.39702 1.50739 8.09967 1.5 8.84736V17.5618C1.5 19.4607 3.05488 21 4.97291 21H6.89696C7.58235 21 8.13797 20.4499 8.13797 19.7714V19.7714" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="nav-item dropdown" onClick={(e) => { isDropdownMenu(e) }}>
                            <NavLink className="nav-link" exact to="/1">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M12.0568 2.00014C8.54687 1.98596 5.28557 3.8071 3.4605 6.80041C1.63543 9.79372 1.51292 13.5224 3.13757 16.6287L3.33789 17.0192C3.50209 17.3264 3.53644 17.6865 3.43329 18.0192C3.14742 18.7784 2.90849 19.5545 2.71784 20.343C2.71784 20.743 2.83231 20.9715 3.26158 20.962C4.0219 20.7941 4.77068 20.5778 5.50332 20.3144C5.81886 20.2275 6.15437 20.2476 6.45725 20.3715C6.73389 20.5049 7.2967 20.8477 7.31578 20.8477C10.9915 22.7805 15.4808 22.2473 18.5998 19.5075C21.7187 16.7677 22.8199 12.39 21.3676 8.5041C19.9153 4.61815 16.2111 2.03059 12.0568 2.00014V2.00014Z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <ellipse opacity="0.4" cx="7.28702" cy="12.0001" rx="0.476965" ry="0.47619" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <ellipse opacity="0.4" cx="12.057" cy="12.0001" rx="0.476965" ry="0.47619" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <ellipse opacity="0.4" cx="16.8266" cy="12.0001" rx="0.476965" ry="0.47619" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </NavLink>
                            <ul className="dropdown-menu list-unstyled">
                                <li><Link className="dropdown-item" to="//">In Process</Link></li>
                                <li><Link className="dropdown-item" to="//">Web App</Link></li>
                                <li><Link className="dropdown-item" to="//">Blogger</Link></li>
                                <li><Link className="dropdown-item" to="//">App Design</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item" onClick={(e) => { isDropdownMenu(e) }}>
                            <NavLink className="nav-link" exact to="/2">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M7.37121 10.2017V17.0619" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path opacity="0.4" d="M12.0382 6.91913V17.0618" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path opacity="0.4" d="M16.6285 13.8268V17.0619" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M16.6857 2H7.31429C4.04762 2 2 4.31208 2 7.58516V16.4148C2 19.6879 4.0381 22 7.31429 22H16.6857C19.9619 22 22 19.6879 22 16.4148V7.58516C22 4.31208 19.9619 2 16.6857 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={(e) => { isDropdownMenu(e) }}>
                            <NavLink className="nav-link" exact to="/3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M21.9446 15.7579C21.9446 19.336 19.836 21.4446 16.2579 21.4446H8.47173C4.88444 21.4446 2.77588 19.336 2.77588 15.7579V7.9626C2.77588 4.38444 4.09031 2.27588 7.66847 2.27588H9.66749C10.3858 2.27588 11.0621 2.61406 11.4931 3.18868L12.4059 4.40269C12.8378 4.97618 13.5135 5.31406 14.2315 5.31549H17.0611C20.6484 5.31549 21.972 7.14108 21.972 10.7923L21.9446 15.7579Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path opacity="0.4" d="M7.55908 14.4891H17.1526" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={(e) => { isDropdownMenu(e) }}>
                            <NavLink className="nav-link" exact to="/4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.4" d="M17.2676 8.5611L13.0022 11.9954C12.1949 12.6282 11.0634 12.6282 10.2562 11.9954L5.9541 8.5611" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.88787 3H16.3158C17.6752 3.01525 18.969 3.58993 19.896 4.5902C20.823 5.59048 21.3022 6.92903 21.222 8.29412V14.822C21.3022 16.1871 20.823 17.5256 19.896 18.5259C18.969 19.5262 17.6752 20.1009 16.3158 20.1161H6.88787C3.96796 20.1161 2 17.7407 2 14.822V8.29412C2 5.37545 3.96796 3 6.88787 3Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="nav-item" onClick={(e) => { isDropdownMenu(e) }}>
                            <NavLink className="nav-link" exact to="/5">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle opacity="0.4" cx="11.5788" cy="6.77803" r="4.77803" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.00002 18.2014C3.99873 17.8655 4.07385 17.5338 4.2197 17.2312C4.67736 16.3158 5.96798 15.8307 7.03892 15.611C7.81128 15.4462 8.59431 15.3361 9.38217 15.2815C10.8408 15.1534 12.3079 15.1534 13.7666 15.2815C14.5544 15.3367 15.3374 15.4468 16.1099 15.611C17.1808 15.8307 18.4714 16.2701 18.9291 17.2312C19.2224 17.848 19.2224 18.564 18.9291 19.1808C18.4714 20.1419 17.1808 20.5813 16.1099 20.7918C15.3384 20.9635 14.5551 21.0767 13.7666 21.1305C12.5794 21.2311 11.3866 21.2495 10.1968 21.1854C9.92221 21.1854 9.65677 21.1854 9.38217 21.1305C8.59663 21.0773 7.81632 20.9641 7.04807 20.7918C5.96798 20.5813 4.68652 20.1419 4.2197 19.1808C4.0746 18.8747 3.99955 18.5402 4.00002 18.2014Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-right">
                    <h3 className="d-flex align-items-center justify-content-between">
                        <span className="title">Projects</span>
                        <button type="button" className="btn">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#0049C6" />
                                <path d="M17.6668 9.33331H14.3335V14.3333H9.3335V17.6666H14.3335V22.6666H17.6668V17.6666H22.6668V14.3333H17.6668V9.33331Z" fill="white" />
                            </svg>
                        </button>
                    </h3>
                </div>
            </aside>
        </>
    )
}

export default Sidebar
