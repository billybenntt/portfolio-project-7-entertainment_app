import {Link} from 'react-router-dom'
import Wrapper from '@/styles/wrappers/ErrorPage.jsx'
import {ImageNotFound} from '@/assets/images'


function Error() {
    return (
        <Wrapper className="full-page">
            <div>
                <img src={ImageNotFound} alt="not found image"/>
                <h3>404 Page not found! 🙅‍♂️</h3>
                <p>We can't find the page you are looking for</p>
                <Link to="/">Back home</Link>
            </div>
        </Wrapper>
    )
}

export default Error
