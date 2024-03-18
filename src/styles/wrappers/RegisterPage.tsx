import styled from 'styled-components'

// REGISTER PAGE STYLED COMPONENT
const Wrapper = styled.section`
    display: grid;
    align-items: center;

    .logo-icon {
        display: block;
        margin: 0 auto 1.38rem;
    }

    .form {
        max-width: 400px;
        border-top: 5px solid var(--primary-500);
    }

    h3 {
        text-align: center;
    }

    p {
        margin: 1rem 0 0;
        text-align: center;
    }

    .btn {
        margin-top: 1rem;
    }

    .member-btn {
        background: transparent;
        border: transparent;
        color: var(--primary-500);
        cursor: pointer;
        letter-spacing: var(--letterSpacing);
    }
`
export default Wrapper
