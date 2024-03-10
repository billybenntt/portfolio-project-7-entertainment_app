import main from '../assets/images/main.svg'
import Wrapper from '../styles/wrappers/LandingPage.jsx'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

function Landing () {
  return (
    <Wrapper>
      {/*  LOGO HEADER*/}
      <nav>
        <Logo/>
      </nav>

      {/*  MAIN CONTAINER */}
      <div className="container page">
        {/* Info */}
        <div className="info">
          <h1> Job <span>Tracking</span> App</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi distinctio eaque eius eos
            exercitationem fugiat iste, maxime minima mollitia numquam praesentium quia quis quisquam saepe
            sint ullam veniam voluptatem.</p>

          {/* Button */}
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>

        </div>
        {/* Image  */}
        <img src={main} alt="main image" className="img main-img"/>
      </div>

    </Wrapper>
  )
}

export default Landing
