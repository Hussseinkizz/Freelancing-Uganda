import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HeroBar from '../../components/HeroBar/HeroBar';

const home = () => {
  return (
    <>
      <Header />
      <HeroBar />
      <section className="section columns my-6">
        <div className="column">
          <button class="button is-medium is-fullwidth mb-5">
            Find Freelancer
          </button>
          <button class="button is-medium is-fullwidth">Apply For A Job</button>
        </div>

        <div className="column">
          <button class="button is-medium is-fullwidth mb-5">
            Youth Programs
          </button>
          <button class="button is-medium is-fullwidth">Bookings</button>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default home;
