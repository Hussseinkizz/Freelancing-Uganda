import { useState } from 'react';

//! Warning: file type should be specific eg. file/image

const FileUpload = ({ fileTitle, inputManager }) => {
  // Initially, no file is selected
  const [selectedFile, setSelectedFile] = useState(null);

  // On File selection, update selected files, forward the file to form handler!

  const handleFile = (event) => {
    setSelectedFile(event.target.files[0]);
    inputManager(selectedFile);
  };

  return (
    <>
      <div className="field">
        <label className="label">Upload {fileTitle}</label>
        <div className="control">
          <input className="input" type="file" onChange={handleFile} />
        </div>
      </div>
    </>
  );
};

FileUpload.defaultProps = {
  fileTitle: 'Your Logo',
};

export default FileUpload;
