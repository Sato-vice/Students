import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mt-5'>
      <h1>
        Your Helper with finding books that You need!
      </h1>



      <div className='margin-medium d-flex flex-row gap-5 justify-content-around'>
        <div className='card p-3 w-50'>
          <h2>Efficiency.</h2>
          <p className='fw-bold'>
            Introducing the ultimate solution for efficient educational resource management at LLP «Aksu Bilim»!
            Our cutting-edge, MongoDB-powered program revolutionizes how you access, track, and manage your inventory
            of books and materials. Designed with your needs in mind, this system provides the supply department,
            finance team, and management with real-time data, seamless inventory control, and insightful reports—all at your fingertips.
          </p>
          <button className='btn btn-info w-50'>Link</button>

        </div>
        <div className='card p-3 w-50'>
          <h2>Effortless.</h2>
          <p className='fw-bold'>
            With a powerful Express.js backend and a sleek, user-friendly React frontend, you can effortlessly monitor usage,
            plan for the future, and make data-driven decisions. Say goodbye to manual processes and hello to streamlined operations,
            all within a secure and scalable platform. Upgrade your educational resource management today with our innovative program, and experience a new era of efficiency and control!
          </p>
          <button className='btn btn-success w-50'>Link</button>
        </div>
      </div>


      <div className='container margin'>
        <h2>
          If You are ready to begin,then click one of the buttons below.
        </h2>
        <div className='d-flex flex-row gap-3'>
          <button className='btn btn-primary'>
            <Link to="drivers" className='text-decoration-none text-white'>Users</Link>
          </button>
          <button className='btn btn-secondary'>
            <Link to="tasks" className='text-decoration-none text-white'>Books</Link>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Home