const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        EXEAT BOOKING APP
      </a>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">
            Home
            <span className="sr-only">
              (current)
            </span>
          </a>
        </li>
        <li className="naav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
