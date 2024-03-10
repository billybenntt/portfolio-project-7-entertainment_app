import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../styles/wrappers/ErrorPage.jsx'

function Error () {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found image"/>
        <h3>404 Page not found! 🙅‍♂️</h3>
        <p>We can't find the page you are looking for</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
