import Image from '../../assets/media/images/protea-hotel-mbale.jpg';

const Card = () => {
  return (
    <>
      <div className="card card-container has-background-light">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={Image} alt="protea hotel mbale" />
          </figure>
        </div>
        <div className="card-content">
          <h2 className="card-title has-text-weight-bold">
            Protea Hotel Mbale
          </h2>
          <p>
            Great hotel with large rooms, polite staff and they also provide
            warm water for warm shower lovers. Breakfast is free and...
          </p>
        </div>
        <div className="card-footer">
          <button className="button bg-blue-hoverable is-fullwidth">
            More About Protea Hotel
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
