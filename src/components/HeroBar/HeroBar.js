import { FaHandPointRight } from 'react-icons/fa';
import FreelancerPostForm from '../Forms/FreelancerPostForm';
import HotelPostForm from '../Forms/HotelPostForm';
import JobPostForm from '../Forms/JobPostForm';
import YouthProgramPostForm from '../Forms/YouthProgramPostForm';
import Modal from '../Modal/useModal';

const HeroBar = () => {
  return (
    <>
      <section className="hero is-info is-small has-background-light has-text-dark">
        <div className="hero-body columns are-small-mobile is-justify-content-center is-align-items-center">
          <div className="column is-medium is-fullwidth">
            <Modal
              label="New Job"
              modalColor="blue"
              title="Post A New Job"
              content={<JobPostForm />}
              action="Post"
            />
          </div>
          <div className="column is-medium is-fullwidth">
            <Modal
              label="Youth Program"
              modalColor="yellow"
              title="Post A New Youth Program"
              content={<YouthProgramPostForm />}
              action="Post"
            />
          </div>
          <div className="column is-medium is-fullwidth">
            <Modal
              label="Booking"
              modalColor="green"
              title="Post A New Hotel Booking"
              content={<HotelPostForm />}
              action="Post"
            />
          </div>
          <div className="column is-medium is-fullwidth">
            <Modal
              label="Freelancer"
              modalColor="purple"
              title="Post A New Freelancer Profile"
              content={<FreelancerPostForm />}
              action="Post"
            />
          </div>
        </div>
      </section>
    </>
  );
};

HeroBar.defaultProps = {
  TitleIcon: <FaHandPointRight className="icon" />,
};

export default HeroBar;
