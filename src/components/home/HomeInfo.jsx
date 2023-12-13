// HomeInfo.js
import React from 'react';
import PropTypes from 'prop-types';
import './HomeInfo.css';

export function HomeInfo({ parrafo, titulo, logo, link }) {
  return (
    <div className='HomeInfo-card'>
      <a className="HomeInfo-link" href={link}>
        {logo && <img className='HomeInfo-img' src={logo} alt='Infoo' />}
        <h2 className='HomeInfo-h2'>
            {titulo}
        </h2>
        <p className='HomeInfo-p'>{parrafo}</p>
      </a>
    </div>
  );
}

HomeInfo.propTypes = {
  parrafo: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  logo: PropTypes.string,
  link: PropTypes.string.isRequired,
};

export function HomeInfoCorto({ parrafo, titulo, link }) {
  return (
    <div className='HomeInfoCorto-card'>
      <a className="HomeInfoCorto-link" href={link}>
        <h3 className='HomeInfoCorto-h2'>
            {titulo}
        </h3>
        <p className='HomeInfoCorto-p'>{parrafo}</p>
      </a>
    </div>
  );
}

HomeInfoCorto.propTypes = {
  parrafo: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  logo: PropTypes.string,
  link: PropTypes.string.isRequired,
};