// import * as FaIcons from 'react-icons/fa';

import FileUpload from '../Inputs/FileUpload';

const JobPostForm = () => {
  // the getUplaodedFile adds uploaded file to the form manager
  // form manager gets all inputs and makes them ready for dataase storage
  const getUplaodedFile = (file) => {
    console.log(file);
  };

  return (
    <form>
      {/* form to help user post new job opportunity */}
      <div className="field">
        <label className="label">Employers Name / Company?</label>
        <div className="control">
          <input className="input" type="text" placeholder="eg. John Doe" />
        </div>
      </div>

      <FileUpload
        fileTitle="Employer Photo / Company Logo"
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
        <label className="label">Job Title</label>
        <div className="control">
          <input className="input" type="text" placeholder="IT Admin" />
        </div>
      </div>

      <div className="field">
        <label className="label">Job Category</label>
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
        <label className="label">Job Description</label>
        <div className="control">
          <textarea
            className="textarea"
            placeholder="Give some brief information about the job..."
          ></textarea>
        </div>
      </div>

      <div className="field">
        <label className="label">Link For More Information?</label>
        <div className="control">
          <input className="input" type="url" placeholder="wwww..." />
        </div>
      </div>

      {/* <div className="field">
        <div className="control">
          <label className="checkbox">
            <input type="checkbox" value="checked" />I agree to the
            <span className="is-link">terms and conditions</span>
          </label>
        </div>
      </div> */}
      {/* 
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div> */}
    </form>
  );
};

export default JobPostForm;
