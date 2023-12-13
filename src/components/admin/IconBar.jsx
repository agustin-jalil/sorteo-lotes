import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faDollarSign, faReceipt } from '@fortawesome/free-solid-svg-icons';
import './IconBar.css';

const Iconbar = ({ handleIconClick }) => {
  return (
    <div className="Iconbar">
      <button className="iconbar-home" onClick={() => handleIconClick('home')}>
          <img src="homeicon.svg" alt="" />
      </button>
      <button className="iconbar-user" onClick={() => handleIconClick('user')}>
        <img src="file.svg" alt="" />
      </button>
      <button className="iconbar-cog" onClick={() => handleIconClick('cog')}>
      <img src="loteria.svg" alt="" />
      </button>
      <button className="iconbar-envelope" onClick={() => handleIconClick('dollar')}>
        <img src="adjudicado.svg" alt="" />
      </button>
    </div>
  );
};

// PropTypes for the function prop handleIconClick
Iconbar.propTypes = {
  handleIconClick: PropTypes.func.isRequired,
};

export default Iconbar;
