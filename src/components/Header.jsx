import { Link } from "react-router-dom"


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">DriveTask</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
          <ul className="navbar-nav d-flex gap-3">
            <li className="nav-item">
              <Link to="/" className="text-decoration-none text-white fw-bolder">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="drivers" className="text-decoration-none text-white fw-bolder">
                Users   
              </Link>
            </li>
            <li className="nav-item">
              <Link to="tasks" className="text-decoration-none text-white fw-bolder">
                Books
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Header