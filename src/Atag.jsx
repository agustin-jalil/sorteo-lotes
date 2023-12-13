import PropTypes from 'prop-types';

const Atag = ({ boton, className, link}) => {


  return (
    <a className={` ${className}`} href={link}>
      {boton}
    </a>
  );
};

Atag.propTypes = {
  boton: PropTypes.string.isRequired,
  link: PropTypes.func.isRequired,
  className: PropTypes.string,
};

Atag.defaultProps = {
  className: '',
};

export default Atag;
