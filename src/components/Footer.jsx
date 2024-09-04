import { Link } from "react-router-dom"
import { 
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook
} from "react-icons/fa"
const Footer = () => {
  return (
    <footer className='margin-medium border-top border-4'>
      <div className='container'>
        <ul className='navbar-nav d-flex flex-row justify-content-center gap-3'>
          <li className='nav-item'>
            <Link to='/' className="text-decoration-none text-dark fw-bolder border-bottom border-dark">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='drivers' className="text-decoration-none text-dark fw-bolder border-bottom border-dark">Drivers</Link>
          </li>
          <li className='nav-item'>
            <Link to='tasks' className="text-decoration-none text-dark fw-bolder border-bottom border-dark">Tasks</Link>
          </li>
        </ul>
      
        <ul className="navbar-nav d-flex flex-row justify-content-center gap-3 mt-3">
          <li className="nav-item">
            <Link to="/" className="text-decoration-none text-dark">
              <FaInstagram className="icon" size={28} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="text-decoration-none text-dark">
              <FaTwitter className="icon" size={28} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="text-decoration-none text-dark">
              <FaYoutube className="icon" size={28} />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="text-decoration-none text-dark">
              <FaFacebook className="icon" size={28} />
            </Link>
          </li>
        </ul>

        <div className="border-top mt-5 d-flex justify-content-center border-dark">
          <h5>All rights are reserved</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer