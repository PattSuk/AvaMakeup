import profile from '../assets/images/profile-with-pumpkin.jpg'

function About () {
    return (
        <section id="about" className="about">
            <h2 className="about__title">About Ava Makeup</h2>
            <div className="about__detail">
                <img className="about__img" src={profile} alt="profile with pumpkin" />
                <div className="about__text">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Fusce lectus est, tincidunt eu massa nec, elementum tristique neque. Cras sagittis turpis enim, vel porttitor neque facilisis nec. Cras mollis et orci quis maximus. Praesent at nisl pharetra, gravida metus vitae, ultricies elit. Duis dignissim viverra est id laoreet. Suspendisse rutrum blandit pellentesque. Phasellus auctor eros at euismod vulputate.</p>
                </div>
            </div>
      </section>
    )
}

export default About;