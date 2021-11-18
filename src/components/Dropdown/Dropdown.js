import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        className={`dropdown ${isActive && 'is-active'}`}
        tabIndex="0"
        onBlur={() => setIsActive(!isActive)}
      >
        <div className='dropdown-trigger'>
          <button
            className="button icon-text dropdown-trigger"
            aria-haspopup="true"
            aria-controls="dropdown-menu3"
            onClick={() => setIsActive(!isActive)}
          >
            <span>Popular</span>
            <span className="icon is-small">
              <FaAngleDown className="icon" />
            </span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu3" role="menu">
          <div className="dropdown-content">
            <span href="#" className="dropdown-item">
              Item 1
            </span>
            <span href="#" className="dropdown-item">
              Item 2
            </span>
            <span href="#" className="dropdown-item">
              Item 3
            </span>
            <span href="#" className="dropdown-item">
              Item 4
            </span>
            <hr className="dropdown-divider" />
            <span href="#" className="dropdown-item">
              More
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
