import { Link } from "react-router-dom";
import './UserNavbar.css'
import AuthService from "../../PublicServices/authService";
function UserNavbar() {
    function lgt() {
        var service = new AuthService();
        var result = service.logout();

    }

    return (
        <>
            <div className="body">
                <nav className="navbar navbar-expand-sm">
                    <div className="container">
                        <div>
                            <a className="navbar-brand" href="/">MyBank</a>
                        </div>

                        <div >
                            <ul class="nav navbar-nav ms-auto" id="account">
                                <li class="nav-item dropdown">
                                    <a href="/admin" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" id="account">Account</a>
                                    <div class="dropdown-menu dropdown-menu-end">

                                        <Link to='/user/update' className="nav-link">Profile</Link>
                                        <div class="dropdown-divider"></div>
                                        {/* <a href="/" class="dropdown-item">Logout</a> */}
                                        <Link onClick={lgt} className="nav-link">Logout</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default UserNavbar;
