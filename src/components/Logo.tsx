import {ImageLogo} from '@/assets/images';

function Logo() {
    return (
       <span >
        <img src={ImageLogo} alt="logo image" className="logo-icon" style={{width: '50px', height: '50px'}} />
       </span>
    )
}

export default Logo
