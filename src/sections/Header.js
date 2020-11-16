import logo from '../images/logo.svg';

function Header() {
    return (
        <div className="header">
            <div><span><img alt="logo" className="logo-icon" src={logo} /></span></div>

            <div className="navigation">
                <span>Home</span>
                <span>Projects</span>
            </div>
        </div>
    );
}

export default Header;