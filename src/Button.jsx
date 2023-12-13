// Button component
import PropTypes from 'prop-types';
import './Button.css';
function Button({ boton, onClick }) {
  return (
    <button className="boton-default boton-terrenos" onClick={onClick}>
      {boton}
    </button>
  );
}

Button.propTypes = {
  boton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
