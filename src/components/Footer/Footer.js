import './footer.scss';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <footer className="columns footer pb-6 content">
        <div className="column social-icons has-text-centered is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
          <a
            href="https://www.whatsapp.me/#"
            className="iconic-link"
            rel="noreferrer"
            target="_blank"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.twitter.com/#"
            className="iconic-link"
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/#"
            className="iconic-link"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
        </div>
        <div className="column copyright has-text-centered is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
          <h4 className="has-text-grey">&copy; 2021, FREELANCE UG</h4>
        </div>
        <div className="column pollicy-and-about has-text-centered is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
          <Link to="/terms-and-conditions" className="is-link mr-2">
            <span>Privacy Policy</span>
          </Link>
          <Link to="/about" className="is-link">
            <span>About Us</span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
