import './Ganador.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCreditCard, faFolderOpen, faXmark } from '@fortawesome/free-solid-svg-icons';
import LotesIdMapa from '../lotes/LoteIdMapa';



function Ganador () {

  return (
        <main className='main-ganador'>
            <div className='ganador-container'>
                <section className='ganador-info'>
                    <div className="ganador-section1">
                        <img className="ganador-img border-ganador" src="https://img.freepik.com/foto-gratis/retrato-sonriente-joven-encantador-camiseta-gris-pie-contra-fondo-liso_23-2148213406.jpg?w=740&t=st=1699023684~exp=1699024284~hmac=83f49aa6a1611410e6219f6a5490d3f6d5826d2462ac878dc1c33f1daee1028a" alt="" />
                        <div className='ganador-especificaciones'>
                            <div className="icono one">
                                <FontAwesomeIcon className='iconos-FontOne'  icon={faFolderOpen} />
                            </div>
                            <div className="icono two">
                                <FontAwesomeIcon className='iconos-FontTwo' icon={faCreditCard} />
                            </div>
                            <div className="icono three">
                                <FontAwesomeIcon className='iconos-FontThree' icon={faXmark} />
                            </div>
                        </div>
                    </div>
                    <div className="table-container border-ganador scroll-ganador scroll-bar">
                        <table className="ganador-section3">
                            <tbody className="datos-ganador">
                                <tr>
                                    <td className="datos-ganador-titulo"><legend>Nombre </legend></td>
                                    <td className="datos-ganador-nombre"><legend>Agustin Jalil Leon</legend></td>
                                </tr>
                                <tr>
                                    <td className="datos-ganador-titulo"><legend>DNI </legend></td>
                                    <td className="datos-ganador-nombre"><legend>39017064</legend></td>
                                </tr>
                                <tr>
                                    <td className="datos-ganador-titulo"><legend>Lote </legend></td>
                                    <td className="datos-ganador-nombre"><legend>LOTE-12313</legend></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="ganador-section2 border-ganador">
                        <LotesIdMapa/>
                    </div>
                </section>
                <div className="ganador-section-botones">
                    <button className="button-ganador boton-terrenos">Enviar Mail</button>
                    <button className="button-ganador boton-terrenos">Cerrar</button>
                </div>
            </div>
        </main>
    // hacer el grid respoinsive. y ver como agregar mapa. Agregar iconos y ver algunos detalles (responsive en lista para los botones con felx-shrink, en formulario los numeros de telefono)
  );
}

export default Ganador;