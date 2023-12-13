import { useEffect } from 'react';
import './Modal.css';
import Button from '../../Button';

function Modal({ isModalOpen, closeModal }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen, closeModal]);

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-content">
              {/* Your modal content */}
            </div>
            <div className="modal-footer">
              <Button className="boton-terrenos" onClick={closeModal} boton="Enviar" />
              <Button className="boton-terrenos" onClick={closeModal} boton="Cerrar" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
