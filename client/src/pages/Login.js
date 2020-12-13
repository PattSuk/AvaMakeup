import profile from '../assets/images/profile-with-pumpkin.svg';

function Login () {
    return (
        <section className="login">
            <h1 className="login__title">Hello Ava!</h1>
            <form className="login__form">
                <img className="login__img" src={profile} alt="profile with pumpkin" />
                <div className="login__line">
                    <label className="login__label" htmlFor="username">Username : </label>
                    <input className="login__input" type="text" name="username" />
                </div>
                <div className="login__line">
                    <label className="login__label" htmlFor="password">Password :</label>
                    <input className="login__input" type="password" name="password" />
                </div>
                <input className="login__btn" type="submit" value="Log in" />
            </form>
        </section>
    )
}

export default Login;