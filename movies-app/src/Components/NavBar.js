import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid ">
        <Link className="navbar-brand logo" to="/">
          Filmic
          <span
            class="material-icons-outlined"
            style={{ marginLeft: "0.3rem" }}
          >
            live_tv
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/WatchList">
                WatchList
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Purchased">
                My Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Login" tabIndex="-1">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
