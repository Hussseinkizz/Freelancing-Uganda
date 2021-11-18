import FileUpload from '../Inputs/FileUpload';

const HotelPostForm = () => {
  // the getUplaodedFile adds uploaded file to the form manager
  // form manager gets all inputs and makes them ready for dataase storage
  const getUplaodedFile = (file) => {
    console.log(file);
  };

  return (
    <form>
      {/* form to help user post new hotel bookings */}
      <div className="field">
        <label className="label">Hotel Name?</label>
        <div className="control">
          <input className="input" type="text" placeholder="eg. Serena Hotel" />
        </div>
      </div>

      <FileUpload
        fileTitle="Hotel Photo / Logo"
        inputManager={getUplaodedFile}
      />

      <div className="field">
        <label className="label">Phone Number</label>
        <div className="control">
          <input className="input" type="phone" placeholder="07********" />
        </div>
      </div>

      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="you@example.com" />
        </div>
      </div>

      <div className="field">
        <label className="label">Hotel Description</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Give some brief information about the hotel..."
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label">Link For More Information?</label>
        <div className="control">
          <input className="input" type="url" placeholder="wwww..." />
        </div>
      </div>
    </form>
  );
};

export default HotelPostForm;
