import { useState } from 'react';
import './LotesCrear.css';
import HomeIcon from '../home/HomeIcon.jsx';
import Modal from '../modal/Modal'; // Import your Modal component
import { HomeInfoCorto } from '../home/HomeInfo.jsx';

const LotesCrear = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="LotesCrear-container">
      <div className="LotesCrear-Home">
        <HomeIcon
          logo="plus.svg"
          titulo="Agregar"
          parrafo="Agregar Lote"
          boton="Crear"
          onClick={openModal}
        />
        <Modal isModalOpen={isModalOpen} closeModal={closeModal}/>
        <HomeIcon
          logo="pencil.svg"
          titulo="Editar"
          parrafo="Editar Lote"
          boton="Editar"
          onClick={openModal} 
        />
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
        <HomeIcon
          logo="trash.svg"
          titulo="Eliminar"
          parrafo="Eliminar Lote"
          boton="Eliminar"
          onClick={openModal}
        />
        <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
      <div className="LotesCrear-Home">
          <HomeInfoCorto
            titulo="Línea Asociaciones Sindicales, Mutuales y Cooperativas"
            parrafo="Para la generación de suelo urbano y viviendas en terrenos de asociaciones."
            link="https://example.com/corto"
          />
          <HomeInfoCorto
            titulo="Línea Asociaciones Sindicales, Mutuales y Cooperativas"
            parrafo="Para la generación de suelo urbano y viviendas en terrenos de asociaciones."
            link="https://example.com/corto"
          />
      </div>
    </div>
  );
};

export default LotesCrear;
