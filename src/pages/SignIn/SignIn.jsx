import React, { useContext } from 'react';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../providers/UserContext';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

const SignIn = () => {

    const { isSignedIn, setIsSignedIn } = useContext(UserContext);
    const navigate = useNavigate();

    return (
        <div className='signIn-container'>
            <button
                onClick={() => navigate('/')}>
                    <KeyboardBackspaceOutlinedIcon/>
            </button>
            <h1>Sign In</h1>
            <form className='signIn-subContainer' style={{ width: '550px', height: '370px' }} onSubmit={e => e.preventDefault()} >
                <div className='email-container'>
                    <p>Email</p>
                    <input
                        name='email'
                        type="email"
                        placeholder='Your email'
                    />
                </div>

                <div className='password-container'>
                    <p>Password</p>
                    <input
                        name='password'
                        type="password" placeholder='Your password'
                    />
                    <button>Forgot password?</button>
                </div>


                <button>
                    <span>Sign In</span>
                </button>

                <p>Don't have an account?
                    <button
                        className='signUp-button'
                        type='submit'
                        onClick={() => navigate('/signUp')}>
                        Sign Up
                    </button>
                </p>
            </form>
        </div>
    );
};

export default SignIn;