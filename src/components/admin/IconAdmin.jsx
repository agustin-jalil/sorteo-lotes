import PropTypes from 'prop-types';

const IconAdmin = (name) => {
  return (
    <> 
        <img src={name} />
    </>
  );
};

IconAdmin.propTypes = {
  name: PropTypes.string.isRequired,
};

export default IconAdmin;
