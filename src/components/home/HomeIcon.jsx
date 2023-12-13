import './HomeIcon.css';
import PropTypes from 'prop-types';

function HomeIcon({ parrafo, titulo, boton, logo, onClick }) {
  return (
    <div className='HomeIcon-card'>
      <img className='HomeIcon-i' src={logo} alt='Icono' />
      <h6 className='HomeIcon-h6'>{titulo}</h6>
      <p className='HomeIcon-p'>{parrafo}</p>
      <button className="HomeIcon-button boton-terrenos" onClick={onClick}>
        {boton}
      </button>
    </div>
  );
}

HomeIcon.propTypes = {
  parrafo: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  boton: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired, // Ensure onClick is a function prop
};

export default HomeIcon;
