import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import profile from '../assets/images/profile-with-pumpkin.svg';

function Login () {
    const history = useHistory();

    const logIn = (event) => {
        event.preventDefault();
        console.log(event);
        const form = event.target;
        
        if (validateSubmit(form)) {
            axios.post(`http://localhost:5000/login`, {
                username: form.username.value,
                password: form.password.value
            },
            {
                withCredentials: true
            }).then((res) => {
                if (handleStatus(res.status, form)) {
                    sessionStorage.setItem("loggedIn", res.data.user);
                    history.push('/appointments')
                }
            })
            .catch((error) => error.response);
        }
    }

    const handleStatus = (status, form) => {
        if (status === 404) {
            return false;
        }
        if (status === 200) {
            return true;
        }
    }

    const validateSubmit = (form) => {
        let passedSubmitCheck = true;

        if (!form.username.value.trim()) {
            form.username.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.username.parentElement.classList.remove('validation-error');
        }
        if (!form.password.value.trim()) {
            form.password.parentElement.classList.add('validation-error');
            passedSubmitCheck = false;
        } else {
            form.password.parentElement.classList.remove('validation-error');
        }
        return passedSubmitCheck;
  };

    return sessionStorage.getItem("loggedIn")
    ? <Redirect to="/appointments" />
    : (
        <section className="login">
            <h1 className="login__title">Hello Ava!</h1>
            <form className="login__form" onSubmit={ logIn }>
                <img className="login__img" src={profile} alt="profile with pumpkin" />
                <div className="login__line">
                    <label className="login__label" htmlFor="username">Username : </label>
                    <div className="login__container" data-error="Please enter username">
                        <input className="login__input" type="text" name="username" />
                    </div>
                </div>
                <div className="login__line">
                    <label className="login__label" htmlFor="password">Password :</label>
                    <div className="login__container" data-error="Please enter username">
                        <input className="login__input" type="password" name="password" />
                    </div>
                </div>
                <input className="login__btn" type="submit" value="Log in" />
            </form>
        </section>
    )
}

export default Login;