import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal'; // Import your Modal component
import './ListaHeader.css';

function ListaHeader({ titulo, btnUno, btnDos, btnOpcional }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1 className="ListaH1">{titulo}</h1>
      <div className="ListaSearchBar">
        <input className="SearchBar" placeholder="Buscar ganador" />
      </div>
      <div className="ListaContainer">
        <div className="ListaBloqueUno">
          <button className="BotonLista boton-terrenos" onClick={openModal}>
            {btnUno}
          </button>
        </div>
        {btnOpcional && (
          <div className="ListaBloqueDos">
            <button className="BotonLista boton-terrenos" onClick={openModal}>
              {btnDos}
            </button>
          </div>
        )}
      </div>
      <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
}

ListaHeader.propTypes = {
  titulo: PropTypes.string,
  btnUno: PropTypes.string,
  btnDos: PropTypes.string,
  btnOpcional: PropTypes.string,
};

export default ListaHeader;
