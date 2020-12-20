import profile from '../assets/images/profile.jpg';

function About () {
    return (
        <section id="about" className="about">
            <h2 className="about__title">About Ava Makeup</h2>
            <div className="about__detail">
                <img className="about__img" src={profile} alt="profile with flowers" />
                <div className="about__text">
                <p>Hello gorgeous! I’m Ava, a Vancouver based professional makeup artist. Throughout my 7 years of experience in the industry, I have learned that makeup isn’t just a bunch of cosmetics used to hide imperfections but to enhance beauty. I have a strong passion for makeup and a strong belief that everyone is beautiful. My work is well known for its soft glam and effortless style. Success to me is when I deliver your vision of what is beautiful. My goal is to help bring your inner beauty to the outside center stage for those special occasions. Let me make your special day the most memorable for you and your loved ones.</p>
                {/* <p>Fusce lectus est, tincidunt eu massa nec, elementum tristique neque. Cras sagittis turpis enim, vel porttitor neque facilisis nec. Cras mollis et orci quis maximus. Praesent at nisl pharetra, gravida metus vitae, ultricies elit. Duis dignissim viverra est id laoreet. Suspendisse rutrum blandit pellentesque. Phasellus auctor eros at euismod vulputate.</p> */}
                </div>
            </div>
      </section>
    )
}

export default About;