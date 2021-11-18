import Illustration from '../../assets/media/art/Website Login.svg'
import { FaUsers } from 'react-icons/fa';

const login = () => {
  return (
    <>
      <section className="columns is-vcentered box">
        <div
          id="left-container"
          className="column is-flex is-justify-content-space-evenly is-align-items-center is-flex-direction-column has-text-centered has-background-grey-lighter"
        >
          <div id="logo-container" className="p-6 bg-blue rounded m-5">
            <FaUsers className="icon is-large" />
          </div>
          <div id="company-info-container" className="mb-5">
            <h1 className="has-text-weight-bold is-size-3-desktop">
              FREELANCING UGANDA
            </h1>
            <h4 className="has-text-weight-medium is-sizemy-5-desktop">
              Sell And Access Services Free And Easily.
            </h4>
          </div>
          <div id="footer-container" className="mt-5">
            <footer>&copy; Freelancing Uganda 2021.</footer>
          </div>
        </div>
        <div
          id="right-container"
          className="column is-flex is-justify-content-space-evenly is-align-items-center is-flex-direction-column"
        >
          <figure id="illustration-container" className="image art-container">
            <img
              src={Illustration}
              className="art"
              alt="website login illustration"
            />
          </figure>
          <div
            id="action-buttons-container"
            className="buttons is-flex is-justify-content-space-between is-align-items-center"
          >
            <button className="button bg-yellow-hoverable mr-5">Login</button>
            <button className="button bg-blue-hoverable">Signup</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default login
