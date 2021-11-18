import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBar from '../../components/HeroBar/HeroBar';
import Dropdown from '../../components/Dropdown/Dropdown';
import Card from '../../components/Card/Card';
import { BsFillLightningFill } from 'react-icons/bs';

const bookings = () => {
  return (
    <>
      <Header />
      <HeroBar
        Title="Bookings"
        Item1="Hotels And Logdes"
        Item2="Tours And Travel"
        Item3="Flight Booking"
        Item4="Tickets And Events"
      />{' '}
      <section className="section">
        <div
          id="page-title-container"
          className="is-flex is-flex-direction-row is-justify-content-space-between is-align-items-center"
        >
          <div className="icon-text has-text-weight-bold is-size-4-desktop">
            <BsFillLightningFill className="icon" />
            <h1 className="has-text-weight-bold">
              Newly Added Hotels And Lodges:
            </h1>
          </div>
          <div id="bookings-dropdown-container">
            <Dropdown />
          </div>
        </div>
        <div id="bookings-hotel-cards-container" className="columns mt-5">
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
          <div className="column">
            <Card />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default bookings;
