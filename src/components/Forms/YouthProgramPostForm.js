import FileUpload from '../Inputs/FileUpload';

const YouthProgramPostForm = () => {
  // the getUplaodedFile adds uploaded file to the form manager
  // form manager gets all inputs and makes them ready for dataase storage
  const getUplaodedFile = (file) => {
    console.log(file);
  };

  return (
    <form>
      {/* form to help user post a new youth program */}
      <div className="field">
        <label className="label">Your Name / Company?</label>
        <div className="control">
          <input className="input" type="text" placeholder="eg. John Doe" />
        </div>
      </div>

      <FileUpload
        fileTitle="Your Photo / Company Logo"
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
        <label className="label">Program / Campaign Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Youth Meetup" />
        </div>
      </div>

      <div className="field">
        <label className="label">Program Category</label>
        <div className="control">
          <div className="select">
            <select>
              <option>option 1</option>
              <option>option 2</option>
              <option>option 3</option>
              <option>option 4</option>
            </select>
          </div>
        </div>
      </div>

      <div className="field">
        <label className="label">Program Description</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Give some brief information about the program..."
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

export default YouthProgramPostForm;
