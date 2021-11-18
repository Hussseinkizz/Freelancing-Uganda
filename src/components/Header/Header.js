import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Logo from './Logo';
import { IoNotifications, IoPerson } from 'react-icons/io5';
import { RiHotelFill } from 'react-icons/ri';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  let histroy = useHistory();

  return (
    <div calssName="container">
      <nav className="navbar is-fixed-top" id="my-nav" role="navigation">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            {/* <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="freelancing-Uganda logo"
              width="112"
              height="28"
            /> */}
            <Logo />
          </Link>
          {/* Nav-Menu Toggle Icon */}
          <span
            role="button"
            id="burger"
            className={`navbar-burger ${isActive && 'is-active'}`}
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </span>
        </div>
        {/* NavBar Menu */}
        <div className={`navbar-menu ${isActive && 'is-active'}`}>
          <div className="navbar-end">
            <div className="navbar-item">
              <RiHotelFill
                className="icon navbar-icon is-size-4 is-size-5-mobile text-dark-hoverable"
                onClick={() => histroy.push('/bookings')}
              />
            </div>
            <div className="navbar-item">
              <IoNotifications
                className="icon navbar-icon is-size-4 is-size-5-mobile text-dark-hoverable"
                onClick={() => histroy.push('/notifications')}
              />
            </div>
            <div className="navbar-item">
              <IoPerson
                className="icon navbar-icon is-size-4 is-size-5-mobile text-dark-hoverable"
                onClick={() => histroy.push('/profile')}
              />
            </div>
            <div className="navbar-item">
              <div className="buttons are-small-mobile">
                <button
                  className="button bg-dark-hoverable"
                  onClick={() => histroy.push('/signup')}
                >
                  <strong>Sign up</strong>
                </button>
                <button
                  className="button is-light"
                  onClick={() => histroy.push('/login')}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
