import { useState } from 'react';
import Fade from 'react-reveal/Fade';

const useModal = ({ label, modalColor, title, content, action }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {/* modal trigger / button */}
      <button
        className={`show-modal is-block is-fullwidth button bg-${modalColor}-hoverable`}
        onClick={() => setShowModal(true)}
      >
        {/* label text to show as modal trigger */}
        {label}
      </button>
      <div className={`modal ${showModal && 'is-active'}`}>
        <div className="modal-background"></div>
        <Fade big when={showModal}>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                {/* modal title ... */}
                {title}
              </p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => setShowModal(false)}
              ></button>
            </header>
            <section className="modal-card-body">
              {/* modal Content ... */}
              {content}
            </section>
            <footer className="modal-card-foot">
              {/* modal Action eg save changes ... */}
              <button className={`button bg-${modalColor}-hoverable`}>
                {action}
              </button>
              <button className="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </footer>
          </div>
        </Fade>
      </div>
    </>
  );
};

useModal.defaultProps = {
  label: 'Modal Name',
  modalColor: 'blue',
  title: 'Modal Title',
  content: 'What are we showing here?',
  action: 'Save changes or something?',
};
export default useModal;
