import './style/App.css';

import profile from './assets/images/profile-with-pumpkin.jpg'

function App() {
  return (
    <div className="App">
      <div className="hero">
        <h1 className="hero__title">Ava Professional Makeup Artist</h1>
      </div>
      <div className="about" id="about">
      <h2 className="about__title">About Ava Makeup</h2>
        <div className="about__detail">
          <img className="about__img" src={profile} alt="profile with pumpkin" />
          <p className="about__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
