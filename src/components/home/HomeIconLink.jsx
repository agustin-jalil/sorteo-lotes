import PropTypes from 'prop-types';

// Separate function to render the HomeIcon with an <a> tag
function HomeIconLink({ parrafo, titulo, boton, logo, link }) {
  return (
    <div className='HomeIcon-card'>
      <img className='HomeIcon-i' src={logo} alt='Icono' />
      <h6 className='HomeIcon-h6'>{titulo}</h6>
      <p className='HomeIcon-p'>{parrafo}</p>
      <a href={link} className="HomeIcon-button boton-terrenos">
        {boton}
      </a>
    </div>
  );
}

HomeIconLink.propTypes = {
  parrafo: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  boton: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default HomeIconLink;
